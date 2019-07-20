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
        title: '关于xx的全体通知',
        author: '教务处',
        content: '实对于box-shadow,老白我也是一知半解,之前用的时候直接复制已有的,也没有仔细思考过box-shadow的数值分别对应什么,最后',
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
