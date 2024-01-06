Page({
  data: {
    userInfo: {
      name: '高**',
      id: 'xxx',
    }
  },
  login() {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  goHistory() {
    if (!this.isLogin()) {
      return
    }
    wx.navigateTo({
      url: "/pages/history/index",
    })
  },
  goAddHistory() {
    if (!this.isLogin()) {
      return
    }
    wx.navigateTo({
      url: "/pages/add/index",
    })
  },
  isLogin() {
    console.log(this.data);
    let { userInfo:{ id }} = this.data;
    if (!id) {
      wx.showToast({
        title: '请先登录',
        icon: 'error',
        duration: 2000
      })
      return false;
    }
    return true;
  }
});