// components/notice/notice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    noticeConfig: {
      type: Object,
      value: {
        //初始化数据
        hideNotice: false,
        notice: '这是baseCode上关于通告栏的测试文字，谢谢欣赏~~~',
        marqueePace: 1,//滚动速度
        marqueeDistance: 10,//初始滚动距离
        size: 12,
        interval: 20, // 时间间隔
        countTime: ''
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

  },
})
