module.exports = {
  title: '卡卡的自留地',
  description:"blog",   // 描述
  keywords:"前端、后端、VUE、javascript、flutter",  // 关键字
  head:[   // 配置头部
      [
          ['link', {rel:'icon', href:"/favicon.ico"}],
          ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
      ]
  ],
  displayAllHeaders: true, // 默认值：false
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 1, // 侧边栏显示2级
    nav: [
      { text: '博客', link: '/' },
      { text: '前端', link: '/flutter/' },
      { text: 'flutter', link: '/flutter/' },
      { text: '机器学习', link: '/flutter/' },
      // { text: '博客', link: '/blog/' },
      // { text: 'APP下载', link: 'https://github.com/youwallet/wallet/releases' },
      // { text: '接口', link: '/api/' },
      // { text: '开发团队', link: '/team/' },
      { text: 'Github', link: 'https://github.com/zhaobinglong/myBlog' },
    ],
    //sidebar: require('./sidebar'),  // 引入侧边栏
    sidebar: {
      '/': [
        ''
      ],
      '/api/': [
            '', 
            'global',
            'getConfigData'
         ],
      '/blog/':[
        '',
        '数字货币交易所的那点事',
        'IDEX协议分析',
        'DEX',
        'youWallet',
        {text:'xx',link:'https://mp.weixin.qq.com/s/qgXg68kQrK9Ym5eTBd4wXw'}
        ]
    } // 引入侧边栏
  },
}