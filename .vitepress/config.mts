import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '脚本使用教程',
  description: '脚本使用说明',
  lang: 'zh-CN',
  base: '/aitap-auth-pages/',
  srcExclude: ['**/README.md'],
  themeConfig: {
    nav: [
      { text: '教程', link: '/guide/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '安装与导入', link: '/guide/getting-started' },
          ],
        },
        {
          text: '使用说明',
          items: [
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
    },
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
  },
})
