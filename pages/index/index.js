//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/util.js'
Page({
  data: {
    showPopup:false,
    
  },

  onLoad: function () {
    console.log(util)
  },
  showPopup:function(){
    this.setData({
      showPopup: true
    })
  },
  popupCancel: function(){
    this.setData({
      showPopup: false
    });
  },
  popupConfirm: function(){
    this.setData({
      showPopup: false
    });
  }
})
