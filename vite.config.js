import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { createHtmlPlugin } from 'vite-plugin-html';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 自定义插件：移除 CSS link 标签中的 crossorigin 属性
function removeCssCrossorigin() {
  return {
    name: 'remove-css-crossorigin',
    writeBundle(options, bundle) {
      // 在写入文件后处理 HTML
      const htmlFile = join(options.dir || 'dist', 'index.html');

      console.log('parsing  htmlFile');
      
      try {
        let html = readFileSync(htmlFile, 'utf-8');
        // 移除 CSS link 标签中的 crossorigin 属性（多种格式）
        html = html.replace(
          /<link([^>]*\s+rel=["']stylesheet["'][^>]*)\s+crossorigin(\s+.*?[^>]*)>/gi,
          '<link$1$2>'
        );
        html = html.replace(
          /<link([^>]*)\s+crossorigin=["'][^"']*["']([^>]*\s+rel=["']stylesheet["'][^>]*)>/gi,
          '<link$1$2>'
        );
        // 处理 crossorigin 在标签末尾的情况
        html = html.replace(
          /<link([^>]*\s+rel=["']stylesheet["'][^>]*)\s+crossorigin\s*>/gi,
          '<link$1>'
        );

        console.log('parsing  done', html);

        writeFileSync(htmlFile, html, 'utf-8');
      } catch (error) {
        // 如果文件不存在或读取失败，忽略错误（可能由其他插件处理）
        console.warn('Warning: Could not process HTML file:', error.message);
      }
    },
  };
}

export default defineConfig({
  root: '.',
  publicDir: false, // 不使用 public 目录，直接处理根目录资源
  base: process.env.NODE_ENV === 'production' ? 'https://research-cdn.stepfun.ai/step3-vl-10b/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // 保留 console，方便调试
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        // 资源文件命名
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          if (/js/i.test(ext)) {
            return `js/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },
    },
    // 启用 CSS 代码分割
    cssCodeSplit: true,
    // 生产环境 sourcemap
    sourcemap: false,
    // chunk 大小警告限制
    chunkSizeWarningLimit: 1000,
    // 复制静态资源
    copyPublicDir: false,
  },
  plugins: [
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    removeCssCrossorigin(),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
