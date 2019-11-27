const app = getApp()
import util from '../../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //info是传入卡片的测试内容
    info: {
      title: "图片在不同比例view中优化显示",
      areaTitle: "省市区三级联动",
      imgSrc: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566386424398&di=6ab0c53db581d3427ba909b095394f88&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170909%2F5826005a34304713a99f9bb80e850d02.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566386490169&di=caf731138c7b12bc288c8951f64f8b0d&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201602%2F24%2F20160224235200_ckHhy.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566386512357&di=cbee145ed395915523978e08c5d4fa69&imgtype=0&src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F003%2F007%2F270%2F00300727041_10ca3c50.jpg"
      ],
      author: "Thomas",
      time: "2019-08-21"
    },
    noticeConfig: {
      hideNotice: false,
      notice: '这是baseCode上关于通告栏的测试文字，谢谢欣赏~~~',
      marqueePace: 1, //滚动速度
      marqueeDistance: 10, //初始滚动距离
      size: 12,
      interval: 20, // 时间间隔
      countTime: '',
      windowWidth: null,
      length: null
    },
    areaSelect: ['', '', ''], //省市区的地区内容
    areaCode: '', //省市区的地区代码
    showPopup: false, //控制显示popup
    showMethod: 0, //显示的功能类型
    daysArr: [], //存放day的样式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      showMethod: options.id
    });
    this.init();
  },
  init: function() {
    let id = this.data.showMethod;
    switch (id) {
      case "0":
        break;
      case "1":
        break;
      case "2":
        break;
      case "3":
        break;
      case" 4":
        this.initCalendar();
        break;
      case "5": 
        this.initNotice();
        break;
    }
  },
  //选择省市区的触发函数
  bindRegionChange: function(e) {
    this.setData({
      areaCode: e.detail.postcode,
      areaSelect: e.detail.value
    })
  },
  //显示popup蒙层
  showPopup: function() {
    this.setData({
      showPopup: true
    })
  },
  //popup取消的回调函数
  popupCancel: function() {
    this.setData({
      showPopup: false
    });
  },
  //popup确定的回调函数
  popupConfirm: function() {
    this.setData({
      showPopup: false
    });
  },
  //初始化calendar
  initCalendar: function() {
    let daysArr = [];
    let nowDate = new Date();
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let nowDay = new Date().getDate();
    let daysNum = new Date(year, month + 1, 0).getDate();
    console.log(daysNum, month);
    for (let i = 1; i <= daysNum; i++) {
      daysArr.push({
        month: 'current',
        day: i,
        color: 'rgb(18, 150, 219)'
      });
    }
    //当前日期
    daysArr.push({
      month: 'current',
      day: nowDay,
      color: 'white',
      background: 'rgba(18, 150, 219,0.5)'
    }, );
    this.setData({
      daysArr: daysArr
    })
  },
  //初始化notice
  initNotice: function(){
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
  //通告栏执行函数
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
  },

})