// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: {
      type: Object,
      value: {
        id: '0',
        title: '这是一个弹窗组件',
        content: '这是一个弹窗的组件',
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
    cancel: function(e){
      this.triggerEvent('popupCancel')
    },
    confirm: function(e){
      this.triggerEvent('popupConfirm');
    }
  }
})
