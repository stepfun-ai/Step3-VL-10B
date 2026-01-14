import json
import os
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
TIMEOUT = 30

BASE_DIR = Path("ref_design/assest/peer_sources/moonshotai.github.io-Kimi-K2")
SRC_FILES = [
    BASE_DIR / "page.html",
    BASE_DIR / "css" / "index-LguKddU7.css",
    BASE_DIR / "js" / "index-C-2eqP6Y.js",
]

ALLOWED_HOSTS = {
    "statics.moonshot.cn",
    "moonshotai.github.io",
    "kimi.ai",
    "www.kimi.ai",
}

EXTS = {
    ".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif",
    ".mp4", ".webm", ".mp3", ".wav",
    ".json",
}

URL_RE = re.compile(r"(https?:)?//[^\s'\"\\)]+")


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return resp.read()


def is_allowed(url: str) -> bool:
    try:
        parts = urllib.parse.urlparse(url)
    except ValueError:
        return False
    host = parts.netloc
    return host in ALLOWED_HOSTS


def guess_ext(url: str) -> str:
    path = urllib.parse.urlparse(url).path
    _, ext = os.path.splitext(path)
    return ext.lower()


def safe_path(url: str) -> str:
    parts = urllib.parse.urlparse(url)
    host = parts.netloc
    path = parts.path.lstrip("/")
    if not path:
        path = "index"
    if parts.query:
        q = re.sub(r"[^a-zA-Z0-9._-]+", "_", parts.query)
        path = f"{path}_{q}"
    return os.path.join(host, path)


def collect_urls(text: str) -> set:
    urls = set()
    for m in URL_RE.finditer(text):
        raw = m.group(0)
        # trim common trailing punctuation from embedded URLs
        raw = raw.rstrip(").,;\"'\\]")
        if raw.startswith("//"):
            raw = "https:" + raw
        urls.add(raw)
    return urls


def main(out_dir: str):
    out_dir = Path(out_dir)
    media_dir = out_dir / "media"
    out_dir.mkdir(parents=True, exist_ok=True)
    media_dir.mkdir(parents=True, exist_ok=True)

    manifest = {"downloaded": [], "skipped": [], "errors": []}

    urls = set()
    for p in SRC_FILES:
        if not p.exists():
            manifest["errors"].append(f"missing_source_file: {p}")
            continue
        text = p.read_text(errors="ignore")
        urls |= collect_urls(text)

    # Filter urls
    filtered = []
    for url in sorted(urls):
        if not is_allowed(url):
            manifest["skipped"].append({"url": url, "reason": "host_not_allowed"})
            continue
        ext = guess_ext(url)
        if ext and ext not in EXTS:
            manifest["skipped"].append({"url": url, "reason": f"ext_not_target:{ext}"})
            continue
        if not ext:
            manifest["skipped"].append({"url": url, "reason": "no_ext"})
            continue
        filtered.append(url)

    for url in filtered:
        try:
            data = fetch(url)
            rel = safe_path(url)
            out_path = media_dir / rel
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_bytes(data)
            manifest["downloaded"].append({"url": url, "path": str(out_path)})
        except Exception as e:
            manifest["errors"].append({"url": url, "error": str(e)})

    manifest_path = out_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=True, indent=2), encoding="utf-8")
    print(str(manifest_path))


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "ref_design/assest/kimi_k2_content"
    main(out)
