// pages/method/method.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listInfo: [
      {
        id:0,
        icon: '/images/icons/icon-image.png',
        content: '图片显示',
      },
      {
        id: 1,
        icon: '/images/icons/icon-dialog.png',
        content: '弹窗显示',
      },
      {
        id: 2,
        icon: '/images/icons/icon-area.png',
        content: '地区选择',
      },
      {
        id: 3,
        icon: '/images/icons/icon-clock.png',
        content: '计时秒表',
      },
      {
        id: 4,
        icon: '/images/icons/icon-calendar.png',
        content: '日历展示',
      },
      {
        id: 5,
        icon: '/images/icons/icon-ads.png',
        content: '广告横条',
      },
    ]
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
  goShowMethod: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: './showMethod/showMethod?id=' + id,
    })
  }
  
})