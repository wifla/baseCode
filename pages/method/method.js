// pages/method/method.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //info是传入卡片的测试内容
    info:{
      title:"图片在不同比例view中优化显示",
      areaTitle:"省市区三级联动",
      imgSrc:[
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566386424398&di=6ab0c53db581d3427ba909b095394f88&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170909%2F5826005a34304713a99f9bb80e850d02.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566386490169&di=caf731138c7b12bc288c8951f64f8b0d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201602%2F24%2F20160224235200_ckHhy.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566386512357&di=cbee145ed395915523978e08c5d4fa69&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F003%2F007%2F270%2F00300727041_10ca3c50.jpg"
      ],
      author: "Thomas",
      time: "2019-08-21"
    },
    areaSelect:['','',''],//省市区的地区内容
    areaCode:'',//省市区的地区代码
    showPopup: false,//控制显示popup
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //选择省市区的触发函数
  bindRegionChange: function(e){
    this.setData({
      areaCode: e.detail.postcode,
      areaSelect: e.detail.value
    })
  },
  //显示popup蒙层
  showPopup: function () {
    this.setData({
      showPopup: true
    })
  },
  //popup取消的回调函数
  popupCancel: function () {
    this.setData({
      showPopup: false
    });
  },
  //popup确定的回调函数
  popupConfirm: function () {
    this.setData({
      showPopup: false
    });
  }
  
})