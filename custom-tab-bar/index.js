Component({
  data: {
    selected: 0,
    list: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/assests/images/home.png",
        "selectedIconPath": "/assests/images/home2.png"
      },
      {
        "pagePath": "/pages/categary/index",
        "text": "分类",
        "iconPath": "/assests/images/shangpinfenlei.png",
        "selectedIconPath": "/assests/images/shangpinfenlei2.png"
      },
      {
        "pagePath": "/pages/circle/index",
        "text": "集邮吧",
        "iconPath": "/assests/images/quanzi.png",
        "selectedIconPath": "/assests/images/quanzi2.png"
      },
      {
        "pagePath": "/pages/myself/index",
        "text": "我的",
        "iconPath": "/assests/images/wode.png",
        "selectedIconPath": "/assests/images/wode2.png"
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data, url)
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})