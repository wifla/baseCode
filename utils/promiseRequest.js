function promiseRequest(url, data,method) {
  var promise = new Promise((resolve, reject) => {
    //init
    var that = this;
    var postData = data;
    /*
    //自动添加签名字段到postData，makeSign(obj)是一个自定义的生成签名字符串的函数
    postData.signature = that.makeSign(postData);
    */
    //网络请求
    wx.request({
      url: url,
      data: postData,
      method: method,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {//服务器返回数据
        if (res.data.status == 1) {//res.data 为 后台返回数据，格式为{"data":{...}, "info":"成功", "status":1}, 后台规定：如果status为1,既是正确结果。可以根据自己业务逻辑来设定判断条件
          resolve(res.data.data);
        } else {//返回错误提示信息
          reject(res.data.info);
        }
      },
      error: function (e) {
        reject('网络出错');
      }
    })
  });
  return promise;
}
module.exports = {
  promiseRequest: promiseRequest,
}


// promiseRequest.post('http://接口网址', data,method).then((res) => {
//   console.log(res);//正确返回结果
// }).catch((errMsg) => {
//   console.log(errMsg);//错误提示信息
// });