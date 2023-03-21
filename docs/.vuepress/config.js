module.exports = {
  themeConfig: {
    search: false,
    sidebar: {
      '/':
        [{
          title: 'AncientinkUI',//组名
          children: [
            ['/componentsDocs/components', '组件总览'],
            // ['/componentsDocs/basicComponents', '通用组件'],
           ],
        },
        // {title: 'Group2',
        //    children: [
        //     ['aui-button', 'A'],
        //     ['aui-label', 'B'],
        //   ],
        // }
      ]
    }
  }
}