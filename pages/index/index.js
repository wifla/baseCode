//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/util.js'
Page({
  data: {
    noticeConfig: {
      hideNotice: false,
      notice: '这是baseCode上关于通告栏的测试文字，谢谢欣赏~~~',
      marqueePace: 1,//滚动速度
      marqueeDistance: 10,//初始滚动距离
      size: 12,
      interval: 20, // 时间间隔
      countTime: '',
      windowWidth: null,
      length: null
    }
    
  },

  onLoad: function () {
    let data = {};
    let length = this.data.noticeConfig.notice.length * this.data.noticeConfig.size; //文字长度
    let windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕宽度
    let config = this.data.noticeConfig;
    config.length = length;
    config.windowWidth = windowWidth;
    this.setData({ 
      noticeConfig: config
    });
    let noticeConfig = this.data.noticeConfig;
    noticeConfig.marqueeDistance = windowWidth;
    this.setData({
      noticeConfig: noticeConfig
    });
    this.startNotice();
  },
  startNotice: function(){
    let that = this;
    that.data.noticeConfig.countTime = setInterval(function () {
      let noticeConfig = that.data.noticeConfig;
      if (-noticeConfig.marqueeDistance < noticeConfig.length) {
        noticeConfig.marqueeDistance = noticeConfig.marqueeDistance - noticeConfig.marqueePace;
        that.setData({
          noticeConfig: noticeConfig,
        });
      } else {
        clearInterval(that.data.noticeConfig.countTime);
        noticeConfig.marqueeDistance = that.data.noticeConfig.windowWidth;
        that.setData({
          noticeConfig: noticeConfig
        });
        that.startNotice();
      }
    }, that.data.noticeConfig.interval);
  }
})
