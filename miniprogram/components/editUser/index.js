// components/editUser/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    show: false,
    position: 'top',
    data: {
      type: Object,
      value: {}
    }
  },
  observers: {
    'data': val => {
      
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    overlayStyle: {},
    formData:{
      name: '',
      sex: 1,
      age: '',
      no: '',
      phone: '',
      idCard: '',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit(){

    },
    cancel(){
      this.setData({
        show: false
      })
    }
  }
})