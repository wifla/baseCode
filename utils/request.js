//关于微信请求的封装
import api from './api.js';
var requestHandler = {
  params: {},
  success: function (res) {
    //success
  },
  fail: function (res) {
    //fail
  }
}

//GET请求
function GET(requestHandler, url) {
  request('GET', requestHandler, url)
}
//POST请求
function POST(requestHandler, url) {
  request('POST', requestHandler, url)
}

function request(method, requestHandler, url) {
  //注意：可以对params加密等处理
  let params = requestHandler.params;
  let API_URL = api.baseUrl + url;
  wx.request({
    url: API_URL,
    data: params,
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    // header: {}, // 设置请求的 header
    success: function (res) {
      //注意：可以对参数解密等处理
      requestHandler.success(res)
    },
    fail: function () {
      requestHandler.fail(res)
    },
    complete: function () {
      // complete
    }
  })
}

module.exports = {
  GET: GET,
  POST: POST
}



//使用方法：
// import request from '../../utils/request.js';
// request.POST({
//   params: params,
//   success: function (res) {
//     成功执行的代码
//   },
//   fail: function (res) {
//     失败执行的代码
//   }
// }, 接口路径)