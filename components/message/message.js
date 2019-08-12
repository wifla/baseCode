// components/message/message.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardBg: {
      type: String,
      value: 'rgba(241, 171, 66, 0.2)',
    },
    fontColor: {
      type: String,
      value: 'rgb(241, 171, 66)',
    },
    shadowColor: {
      type: String,
      value: 'rgba(241, 171, 66, 0.5)',
    },
    detail:{
      type: Object,
      value:{
        id: '0',
        title: '这是一个组件',
        author: 'Crystal',
        content: '这是一个微信小程序的组件',
        time: '2019-01-01',
        flag: '0'
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
