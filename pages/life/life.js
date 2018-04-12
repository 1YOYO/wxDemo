//index.js
//获取应用实例
let that
var app = getApp()
Page({
  data: {
    list: ['文本笑话', '图片笑话', '动态图搞笑图'],
    indexs: 0,
    type: 1,
    jockList: [
      {title: '', text: '', img: ''}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    that = this
    that.handleInit()
  },
  handleInit: function () {
    wx.showLoading({title: '极速加载...'})
    wx.request({
      url: 'https://route.showapi.com/341-' + that.data.type,
      data: {
        showapi_timestamp: that.formatterDateTime(),
        showapi_appid: 61691,
        showapi_sign: '0134b5385cd74efa941dc3d5f5d872cd',
        page: '1',
        maxResult: '10'
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        let listArr = []
        let datas = res.data.showapi_res_body.contentlist || []
        datas.map(k => {
          let obj = {title: '', text: '', img: ''}
          obj.title = k.title
          obj.text = k.text
          obj.img = k.img || ''
          listArr.push(obj)
        })
        that.setData({
          jockList: listArr
        })
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
        console.error(res);
      }
    })
  },
  formatterDateTime: function () {
    var date = new Date()
    var month = date.getMonth() + 1
    var datetime = date.getFullYear()
      + ""// "年"
      + (month >= 10 ? month : "0"+ month)
      + ""// "月"
      + (date.getDate() < 10 ? "0" + date.getDate() : date
              .getDate())
      + ""
      + (date.getHours() < 10 ? "0" + date.getHours() : date
              .getHours())
      + ""
      + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
              .getMinutes())
      + ""
      + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
              .getSeconds());
    return datetime;
  },
  bindPickerChange: function (e) {
    let types = e.detail.value * 1 + 1
    that.setData({
      type: types,
      indexs: e.detail.value
    })
    that.handleInit()
  }
})
