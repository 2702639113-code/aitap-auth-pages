# aitap-auth-pages

GitHub Pages 静态站点：邮箱验证回调页 + 脚本使用教程（VitePress）。

## 目录

| 路径 | 说明 |
|------|------|
| `guide/` | 脚本教程 Markdown 与资源（配图见 `guide/images/`） |
| `public/email-callback.html` | 邮箱验证回调页（发布后仍为站点根路径 `/email-callback.html`） |
| `.vitepress/` | VitePress 配置与构建产物 |

## 本地预览

```bash
npm install
npm run docs:dev
```

## 公网地址（Pages 启用后）

- 教程：https://2702639113-code.github.io/aitap-auth-pages/guide/
- 回调：https://2702639113-code.github.io/aitap-auth-pages/email-callback.html

推送 `main` 后由 GitHub Actions 自动构建部署。仓库 Settings → Pages → Source 需选择 **GitHub Actions**。
