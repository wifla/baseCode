//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/util.js'
Page({
  data: {
    showPopup:false,
    imgSrc: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565696384827&di=4d9fdc417f560c773c9a965afb224985&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg"
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
