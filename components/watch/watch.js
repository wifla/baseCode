// components/watch/watch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    hour: '0' + 0,   // 时
    minute: '0' + 0,   // 分
    second: '0' + 0,    // 秒
    counting: false,
    watch: ''//存储计时器
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //开始计时器
    startInterval: function () {
      this.setData({
        counting: true
      });
      const that = this
      var second = that.data.second
      var minute = that.data.minute
      var hour = that.data.hour
      this.data.watch = setInterval(function () {  // 设置定时器
        second++
        if (second >= 60) {
          second = 0  //  大于等于60秒归零
          minute++
          if (minute >= 60) {
            minute = 0  //  大于等于60分归零
            hour++
            if (hour < 10) {
              // 少于10补零
              that.setData({
                hour: '0' + hour
              })
            } else {
              that.setData({
                hour: hour
              })
            }
          }
          if (minute < 10) {
            // 少于10补零
            that.setData({
              minute: '0' + minute
            })
          } else {
            that.setData({
              minute: minute
            })
          }
        }
        if (second < 10) {
          // 少于10补零
          that.setData({
            second: '0' + second
          })
        } else {
          that.setData({
            second: second
          })
        }
      }, 1000);
      
    },
    //暂停计时器
    stopInterval: function(){
      clearInterval(this.data.watch);
      this.setData({
        counting: false
      });
    },
    clearWatch: function(){
      
      //重置计时器
      clearInterval(this.data.watch);
      this.setData({
        counting: false
      });
      this.setData({
        hour:'00',
        minute:'00',
        second: '00'
      });
    }
  }
})
