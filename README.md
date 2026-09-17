# AlwaysBluer 的个人博客

这个仓库使用 [Astro](https://astro.build/) 构建，并通过 GitHub Actions 部署到 GitHub Pages：<https://alwaysbluer.github.io/>。

## 本地运行

项目运行时固定为 Node.js 24；如果使用 mise：

```bash
mise install
```

然后安装依赖并启动：

```bash
npm install
npm run dev
```

浏览器访问 <http://localhost:4321/>。提交前可以运行一次完整构建：

```bash
npm run build
```

## 发布一篇新文章

先用脚本创建草稿：

```bash
npm run new -- "文章标题" "english-slug"
```

新文章会生成在 `src/content/posts/` 中。然后：

1. 编写 Markdown 正文，补充 `description`、`category` 和 `tags`。
2. 本地运行 `npm run dev` 预览。
3. 准备发布时，把 Frontmatter 里的 `draft: true` 改成 `draft: false`。
4. 运行 `npm run build` 做发布前检查。
5. 提交并推送到 `main` 分支。

推送后，`.github/workflows/deploy.yml` 会自动构建并发布网站。不需要提交 `dist/`，也不需要手工上传生成后的 HTML。

## 文章地址

Frontmatter 中的 `path` 决定文章 URL。已发布文章不要随意修改它，否则旧链接会失效。例如：

```yaml
path: 2024/01/19/Build-Blog-Site-with-Hexo
```

对应网址为：

```text
https://alwaysbluer.github.io/2024/01/19/Build-Blog-Site-with-Hexo/
```

## 维护首页技术方向

站点名称、个人介绍、技术主线、验证标准和写作线索集中维护在：

```text
src/data/site.ts
```

修改后，首页和“正在做”页面会同步更新。对外内容应只保留适合公开的信息，不要写入公司内部仓库、客户数据、密钥或未公开项目细节。
