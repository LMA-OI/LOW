import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'LMAOI 官网',
  description: 'LMAOI 是一个出题组，于 2026 年 7 月成立。',
  themeConfig: {
    sidebar: [
      {
        text: '导航',
        items: [
          { text: '介绍', link: '/home' },
          { text: '招贤纳才', link: '/join-us' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
      
    },
    editLink: {
      pattern: 'https://github.com/LMA-OI/LOW/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
