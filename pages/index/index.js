//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎 光临',
    userInfo: {},
    pictorHome: [
      // { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img07.tooopen.com/images/20170306/tooopen_sy_200775896618.jpg' },
      { url: 'http://img02.tooopen.com/images/20160114/tooopen_sy_154351362557.jpg' },
      { url: 'http://img06.tooopen.com/images/20170325/tooopen_sy_203225356543.jpg' },
      { url: 'http://img07.tooopen.com/images/20170704/tooopen_sy_215329232886.jpg' }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '掌中小世界'
    }
  }
})
