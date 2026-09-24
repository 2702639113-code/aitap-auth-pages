# 脚本教程内容目录

本目录存放**脚本使用教程**的全部 Markdown 页面与静态资源。

- 页面：同级 `*.md`（一节一文件）
- 配图/附件：放在 [`images/`](./images/) 下，在 Markdown 中用相对路径引用，例如 `![说明](./images/example.png)`
- 侧边栏目录：在仓库根目录 `.vitepress/config.mts` 的 `sidebar` 中维护

本地预览（仓库根目录）：

```bash
npm install
npm run docs:dev
```

公网地址（启用 GitHub Pages 后）：`/guide/`
