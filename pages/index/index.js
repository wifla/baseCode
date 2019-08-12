//index.js
//获取应用实例
const app = getApp()
import {handleTime} from '../../utils/handleTime'
Page({
  data: {
    showPopup:false
  },

  onLoad: function () {
    console.log(new Date())
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
