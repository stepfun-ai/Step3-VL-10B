import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// 需要复制的静态资源目录和文件
const assetsToCopy = [
  { src: 'images', dest: 'images' },
  { src: 'logo.png', dest: 'logo.png' },
  { src: 'ref_design/assest/llm_logos', dest: 'ref_design/assest/llm_logos' },
];

function copyRecursive(src, dest) {
  const stat = statSync(src);
  
  if (stat.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    const files = readdirSync(src);
    files.forEach(file => {
      copyRecursive(join(src, file), join(dest, file));
    });
  } else {
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
  }
}

console.log('📦 复制静态资源到 dist 目录...');

assetsToCopy.forEach(({ src, dest }) => {
  const srcPath = join(projectRoot, src);
  const destPath = join(distDir, dest);
  
  try {
    copyRecursive(srcPath, destPath);
    console.log(`✅ 已复制: ${src} -> ${dest}`);
  } catch (error) {
    console.warn(`⚠️  跳过: ${src} (${error.message})`);
  }
});

console.log('✨ 静态资源复制完成！');
