const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

 const regExps = {
  email: '/^[0-9a-zA-Z_]+@[0-9a-zA-Z_]+[\.]{1}[0-9a-zA-Z]+[\.]?[0-9a-zA-Z]+$/',//邮箱
  mobile: '/^(?:1\d{2})-?\d{5}(\d{3}|\*{3})$/', //手机号码
  qq: '/^[1-9][0-9]{4,9}$/', //QQ
  befitName: '/^[a-z0-9A-Z\u4e00-\u9fa5]+$/', //合适的用户名，中文,字母,数字
  befitPwd:' /^[a-z0-9A-Z_]+$/ ', //合适的用户名，字母,数字,下划线
  allNumber: '/^[0-9]+.?[0-9]$/',//全部为数字
}
module.exports = {
  formatTime: formatTime,
  regExps: regExps
}