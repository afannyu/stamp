Page({
  data: {},
  onLoad() {},
  onShow: function () {
    console.log("onShow")
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  loginForm: function (data) {
    const {
      name,
      counts,
      date,
      price,
      author,
      image
    } = data.detail.value
    wx.request({
      url: 'http://127.0.0.1:3000',
      success: function (res) {
        console.log(res)
      }
    })
  }
})