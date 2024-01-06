// pages/history/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    list: [
      {
        name: '小明',
        id: '10',
        sex: 1,
        time: '2020/10/11'
      },
      {
        name: '小阳',
        id: '11',
        sex: 1,
        time: '2020/10/11'
      },
      {
        name: '小虎',
        id: '12',
        sex: 1,
        time: '2020/10/11'
      },
      {
        name: '小敏',
        id: '13',
        sex: 0,
        time: '2020/10/11'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let {list} = this.data;
    this.setData({
      list: [...list, ...list, ...list, ...list, ...list, ...list]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  viewList() {
    wx.navigateTo({
      url: '/pages/userDetails/index',
    })
  }
})