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
          items: [
            { text: '简介', link: '/guide/' },

          ],
        },
        {
          text: '使用说明',
          items: [
            { text: '软件下载以及脚本导入', link: '/guide/download' },
            { text: '电脑端使用教程', link: '/guide/pc' },
            { text: '安卓端使用教程', link: '/guide/android' },
            { text: '模拟器&虚拟机教程', link: '/guide/emulator' },
            { text: '辅助脚本使用教程', link: '/guide/helper' },
            { text: '脚本参数详情', link: '/guide/params' },
            { text: '附加功能', link: '/guide/extras' },
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
    },
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    docFooter: {
      prev: false,
      next: false,
    },
    search: {
      provider: 'local',
    },
  },
})
