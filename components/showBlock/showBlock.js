// components/showBlock/showBlock.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    showBg: {
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
    info: {
      type: Object,
      value: {}
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
