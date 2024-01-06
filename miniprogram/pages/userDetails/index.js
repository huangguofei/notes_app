const { RESERVE_STATUS } = require('@utils/common.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    RESERVE_STATUS,
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
    },
    isShowEdit: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let { userData } = this.data;
    for(let i = 0; i < 40; i++) {
      userData.list.push({
        id: 11 + i,
        time: '2022/11/' + i,
        project: '血压检测、血糖检测、新冠测试',
        status: i % 3, 
      })
    }
    this.setData({
      userData
    })
  },
  showEdit() {
    this.setData({
      isShowEdit: true
    })
  }
})