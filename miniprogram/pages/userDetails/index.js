// pages/userDetails/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {
      id: '111',
      name: '小李',
      sex: 1,
      age: 24,
      phone: '13133333333',
      no: '912931112',
      idCard: '510503199111119090',
      lastTime: '2022/11/11',
      list: [
        {
          id: '11',
          time: '2022/11/10',
          project: '血压检测',
          status: 1, 
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  }
})