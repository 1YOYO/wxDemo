//index.js
//获取应用实例
let that
var app = getApp()
Page({
  data: {
    list: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
    indexs: '',
    today_tomorrow: [
      { summary: '', health: '', love: '', money: '', career: '', color: '', number: '', presummary: ''},
      { summary: '', health: '', love: '', money: '', career: '', color: '', number: '', presummary: ''}
    ],
    startImg: [
      'http://api.jisuapi.com/astro/static/images/baiyang.png',
      'http://api.jisuapi.com/astro/static/images/jinniu.png',
      'http://api.jisuapi.com/astro/static/images/shuangzi.png',
      'http://api.jisuapi.com/astro/static/images/juxie.png',
      'http://api.jisuapi.com/astro/static/images/shizi.png',
      'http://api.jisuapi.com/astro/static/images/chunv.png',
      'http://api.jisuapi.com/astro/static/images/tianping.png',
      'http://api.jisuapi.com/astro/static/images/tianxie.png',
      'http://api.jisuapi.com/astro/static/images/sheshou.png',
      'http://api.jisuapi.com/astro/static/images/mojie.png',
      'http://api.jisuapi.com/astro/static/images/shuiping.png',
      'http://api.jisuapi.com/astro/static/images/sheshou.png'
    ],
    zall: [
      { summary: '', health: '', love: '', money: '', career: ''},
      { summary: '', health: '', love: '', money: '', career: ''},
      { summary: '', health: '', love: '', money: '', career: ''}
    ],
    daylist: ['本周', '本月', '本年'],
    startList: [
      {date: '03.21 - 04.19', start: '白羊座', color: '#e0463e'},
      {date: '04.19 - 05.20', start: '金牛座', color: '#1ffff5'},
      {date: '05.21 - 06.21', start: '双子座', color: '#e07e25'},
      {date: '06.22 - 07.22', start: '巨蟹座', color: '#8F42B2'},
      {date: '07.23 - 08.22', start: '狮子座', color: '#e09702'},
      {date: '08.23 - 09.22', start: '处女座', color: '#325412'},
      {date: '09.23 - 10.23', start: '天秤座', color: '#e458a8'},
      {date: '10.24 - 11.22', start: '天蝎座', color: '#b054ce'},
      {date: '11.23 - 12.21', start: '射手座', color: '#95ffa6'},
      {date: '12.22 - 01.19', start: '摩羯座', color: '#2777c6'},
      {date: '01.20 - 02.18', start: '水瓶座', color: '#c8d94e'},
      {date: '02.19 - 03.20', start: '双鱼座', color: '#dbc049'}
    ],
    showList: false
  },
  onLoad: function () {
    console.log('onLoad')
    that = this
  },
  bindPickerChange: function (e) {
    this.setData({
      indexs: e.detail.value
    })
    this.handleSearch()
  },
  handleSearch () {
    wx.showLoading({title: '极速加载...'})
    let astroid = this.data.indexs * 1 + 1
    wx.request({
      url: 'https://api.jisuapi.com/astro/fortune',
      data: {
        appkey: 'e8d46b195f33b08b',
        astroid: astroid
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        let todayyData = res.data.result.today
        let tomorrowData = res.data.result.tomorrow
        let weekData = res.data.result.week
        let monthData = res.data.result.month
        let yearData = res.data.result.year
        let allData = [todayyData, tomorrowData]
        let listData = [weekData, monthData, yearData]
        that.setData({
          today_tomorrow: allData,
          zall: listData
        })
        wx.hideLoading()
      },
      fail: function (res) {
        wx.hideLoading()
        console.error(res);
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 3000);
  },
  handleShow () {
    this.setData({
      showList: true
    })
  },
  handleHide (e) {
    this.setData({
      showList: false
    })
    console.log(e)
  }
})
