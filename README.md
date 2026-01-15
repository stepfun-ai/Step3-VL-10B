# Step3-VL-10B

## 开发

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

### 预览构建结果

```bash
npm run preview
```

## 部署到阿里云 OSS

### 1. 配置环境变量

复制 `env.example` 为 `.env` 并填入你的阿里云 OSS 配置：

```bash
cp env.example .env
```

编辑 `.env` 文件：

```env
OSS_REGION=oss-cn-hangzhou
OSS_ACCESS_KEY_ID=your_access_key_id
OSS_ACCESS_KEY_SECRET=your_access_key_secret
OSS_BUCKET=your-bucket-name
OSS_PREFIX=step3-vl-10b/  # 可选，上传路径前缀
```

### 2. 部署

#### 方式一：构建并上传（推荐）

```bash
npm run deploy
```

这个命令会：

1. 执行构建（`npm run build`）
2. 自动上传到阿里云 OSS

#### 方式二：仅上传（已构建）

如果已经构建过，可以直接上传：

```bash
npm run upload
```
