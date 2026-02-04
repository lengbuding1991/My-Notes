import { defineConfig } from 'vitepress'

// 你的主文件名（假设你的主文件叫 "ProjectA.md"，文件夹叫 "ProjectA"，这里就填 "ProjectA"）
// 请把下面这个变量改成你实际的文件名
const mainName = '你的主文件名'; 

export default defineConfig({
  // 1. 网站标题
  title: "我的个人知识库",
  description: "自动同步的个人文档站",

  // 2. 主题配置
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文档列表', link: `/${mainName}` }, // 点击直接跳转到主文件
    ],

    // 左侧侧边栏
    // 这里我们手动配置一下结构，让它左边显示你的主文件和子文件夹里的内容
    sidebar: [
      {
        text: '核心文档',
        items: [
          // 第一行：指向根目录的主文件
          { text: '项目总览', link: `/${mainName}` },
          
          // 下面你可以列出子文件夹里的文件
          // 假设你的文件夹也叫 mainName，里面有个 sub1.md
          // 你需要手动把子文件列在这里，或者以后我们用插件自动生成
          { 
            text: '子文档目录', 
            collapsed: false, // 是否默认展开
            items: [
              // 【修改这里】把你文件夹里的子文件名填在这里
              // 格式：{ text: '显示名称', link: '/文件夹名/文件名' }
              { text: '子文档1', link: `/${mainName}/子文件1` },
              { text: '子文档2', link: `/${mainName}/子文件2` },
            ]
          }
        ]
      }
    ],

    // 启用本地搜索（非常好用！）
    search: {
      provider: 'local'
    },

    // 社交链接（右上角图标）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lengbuding1991/My-Notes' }
    ],
    
    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026'
    }
  }
})
