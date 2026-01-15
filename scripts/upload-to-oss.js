import OSS from 'ali-oss';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// 从环境变量读取配置
const ossConfig = {
  region: process.env.OSS_REGION || '',
  accessKeyId: process.env.OSS_ACCESS_KEY_ID || '',
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET || '',
  bucket: process.env.OSS_BUCKET || '',
  // 上传到 OSS 的路径前缀，例如 'step3-vl-10b/' 或 ''
  prefix: process.env.OSS_PREFIX || '',
};

// 验证配置
const requiredFields = ['region', 'accessKeyId', 'accessKeySecret', 'bucket'];
const missingFields = requiredFields.filter(field => !ossConfig[field]);

if (missingFields.length > 0) {
  console.error('❌ 缺少必需的 OSS 配置项:');
  missingFields.forEach(field => {
    console.error(`   - ${field}`);
  });
  console.error('\n请检查 .env 文件或环境变量配置');
  process.exit(1);
}

// 创建 OSS 客户端
const client = new OSS(ossConfig);

// 需要上传的文件扩展名
const allowedExtensions = [
  '.html', '.css', '.js', '.json',
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
  '.woff', '.woff2', '.ttf', '.eot',
  '.pdf', '.zip', '.txt'
];

// 递归获取所有文件
function getAllFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      // 跳过 node_modules 和 .git 目录
      if (file !== 'node_modules' && file !== '.git') {
        getAllFiles(filePath, fileList);
      }
    } else {
      const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
      if (allowedExtensions.includes(ext) || !ext) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// 上传文件到 OSS
async function uploadFile(localPath) {
  const relativePath = relative(distDir, localPath);
  const ossPath = ossConfig.prefix 
    ? `${ossConfig.prefix}${relativePath.replace(/\\/g, '/')}`
    : relativePath.replace(/\\/g, '/');
  
  try {
    const content = readFileSync(localPath);
    const result = await client.put(ossPath, content);
    return { success: true, path: ossPath, url: result.url };
  } catch (error) {
    return { success: false, path: ossPath, error: error.message };
  }
}

// 主函数
async function main() {
  console.log('🚀 开始上传文件到阿里云 OSS...\n');
  console.log(`📦 Bucket: ${ossConfig.bucket}`);
  console.log(`📍 Region: ${ossConfig.region}`);
  console.log(`📁 Prefix: ${ossConfig.prefix || '(无)'}`);
  console.log(`📂 源目录: ${distDir}\n`);

  // 检查 dist 目录是否存在
  try {
    statSync(distDir);
  } catch (error) {
    console.error('❌ dist 目录不存在，请先运行 npm run build');
    process.exit(1);
  }

  // 获取所有文件
  const files = getAllFiles(distDir);
  console.log(`📋 找到 ${files.length} 个文件需要上传\n`);

  // 上传文件
  const results = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const relativePath = relative(distDir, file);
    process.stdout.write(`[${i + 1}/${files.length}] 上传: ${relativePath} ... `);
    
    const result = await uploadFile(file);
    results.push(result);
    
    if (result.success) {
      successCount++;
      console.log('✅');
    } else {
      failCount++;
      console.log(`❌ 失败: ${result.error}`);
    }
  }

  // 输出结果统计
  console.log('\n' + '='.repeat(60));
  console.log('📊 上传结果统计:');
  console.log(`   ✅ 成功: ${successCount}`);
  console.log(`   ❌ 失败: ${failCount}`);
  console.log(`   📁 总计: ${files.length}`);
  console.log('='.repeat(60));

  // 如果有失败的文件，列出详情
  if (failCount > 0) {
    console.log('\n❌ 失败的文件:');
    results
      .filter(r => !r.success)
      .forEach(r => {
        console.log(`   - ${r.path}: ${r.error}`);
      });
  }

  // 输出访问 URL（如果配置了自定义域名）
  if (successCount > 0) {
    console.log('\n✨ 上传完成！');
    if (ossConfig.prefix) {
      console.log(`\n🌐 访问地址示例:`);
      console.log(`   https://${ossConfig.bucket}.${ossConfig.region}.aliyuncs.com/${ossConfig.prefix}index.html`);
    } else {
      console.log(`\n🌐 访问地址示例:`);
      console.log(`   https://${ossConfig.bucket}.${ossConfig.region}.aliyuncs.com/index.html`);
    }
  }

  // 如果有失败，退出码为 1
  if (failCount > 0) {
    process.exit(1);
  }
}

// 运行主函数
main().catch(error => {
  console.error('\n❌ 上传过程中发生错误:');
  console.error(error);
  process.exit(1);
});
