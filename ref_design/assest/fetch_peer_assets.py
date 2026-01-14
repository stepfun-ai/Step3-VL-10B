import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from html.parser import HTMLParser

URLS = [
    "https://z.ai/blog/glm-4.5",
    "https://moonshotai.github.io/Kimi-K2/",
    "https://openai.com/zh-Hans-CN/index/introducing-gpt-5-2/",
    "https://www.anthropic.com/news/claude-opus-4-5",
    "https://deepmind.google/models/gemini/pro/",
]

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
TIMEOUT = 30

class AssetParser(HTMLParser):
    def __init__(self, base_url):
        super().__init__()
        self.base_url = base_url
        self.assets = {"css": [], "js": []}

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "link":
            rel = (attrs.get("rel") or "").lower()
            as_attr = (attrs.get("as") or "").lower()
            href = attrs.get("href")
            if not href:
                return
            is_stylesheet = "stylesheet" in rel or as_attr == "style"
            if is_stylesheet:
                self.assets["css"].append(href)
        elif tag == "script":
            src = attrs.get("src")
            if src:
                self.assets["js"].append(src)


def slugify(url):
    parts = urllib.parse.urlparse(url)
    slug = parts.netloc + parts.path
    slug = slug.strip("/")
    if not slug:
        slug = parts.netloc
    slug = re.sub(r"[^a-zA-Z0-9._-]+", "-", slug)
    return slug


def safe_filename(url):
    parts = urllib.parse.urlparse(url)
    base = os.path.basename(parts.path) or "index"
    # include query string to avoid collisions
    if parts.query:
        q = re.sub(r"[^a-zA-Z0-9._-]+", "_", parts.query)
        base = f"{base}_{q}"
    return base


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return resp.read()


def ensure_dir(path):
    os.makedirs(path, exist_ok=True)


def write_bytes(path, data):
    with open(path, "wb") as f:
        f.write(data)


def main(out_root):
    ensure_dir(out_root)
    report = {}
    for url in URLS:
        site_dir = os.path.join(out_root, slugify(url))
        ensure_dir(site_dir)
        css_dir = os.path.join(site_dir, "css")
        js_dir = os.path.join(site_dir, "js")
        ensure_dir(css_dir)
        ensure_dir(js_dir)

        entry = {"url": url, "html": None, "assets": {"css": [], "js": []}, "errors": []}
        try:
            html = fetch(url)
            html_path = os.path.join(site_dir, "page.html")
            write_bytes(html_path, html)
            entry["html"] = html_path

            parser = AssetParser(url)
            try:
                parser.feed(html.decode("utf-8", errors="ignore"))
            except Exception as e:
                entry["errors"].append(f"html_parse_error: {e}")

            for kind in ("css", "js"):
                seen = set()
                for href in parser.assets[kind]:
                    full = urllib.parse.urljoin(url, href)
                    if full in seen:
                        continue
                    seen.add(full)
                    try:
                        data = fetch(full)
                        fname = safe_filename(full)
                        out_dir = css_dir if kind == "css" else js_dir
                        out_path = os.path.join(out_dir, fname)
                        write_bytes(out_path, data)
                        entry["assets"][kind].append({"url": full, "path": out_path})
                        # be polite
                        time.sleep(0.2)
                    except Exception as e:
                        entry["errors"].append(f"asset_{kind}_error: {full} :: {e}")
        except Exception as e:
            entry["errors"].append(f"html_fetch_error: {e}")

        report[url] = entry

    report_path = os.path.join(out_root, "fetch_report.json")
    with open(report_path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=True, indent=2)

    print(report_path)


if __name__ == "__main__":
    out_root = sys.argv[1] if len(sys.argv) > 1 else os.path.join("ref_design", "assest", "peer_sources")
    main(out_root)
