//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    num: 0,
    imageurl: [
      { url: 'http://img02.tooopen.com/images/20160329/tooopen_sy_157646855878.jpg'},
      { url: 'http://img05.tooopen.com/images/20150119/sy_79383352628.jpg'},
      { url: 'http://img05.tooopen.com/images/20141224/sl_106296479468.jpg'},
      { url: 'http://img02.tooopen.com/images/20160527/tooopen_sl_163430547583.jpg'},
      { url: 'http://img05.tooopen.com/images/20140716/sl_85855441862.jpg'},
      { url: 'http://img02.tooopen.com/images/20160329/tooopen_sl_157671231795.jpg'}
    ]
  },
  onLoad: function () {
  },
  // 自定义函数
  bindCd: function () {
    this.setData({
      num: 1
    })
  },
  bindHover: function () {
    this.setData({
      num: 2
    })
  }
})
