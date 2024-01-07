// pages/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      date: '2022-11-11',
      project: '血压监测、心脏检查'
    },
    isEdit: false,
  },
  onLoad() {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('initData', (data) => {
      if (data?.item) {
        this.setData({
          formData: {...data.item}
        })
      }
    })
  },
  handle() {
    let {
      isEdit
    } = this.data;
    const eventChannel = this.getOpenerEventChannel();
    if (!isEdit) {
      this.setData({
        isEdit: true
      });
      return
    }
    eventChannel.emit('updateList', {data: '小星'});
  },
  cancel() {
    this.setData({
      isEdit: false
    });
  }

})