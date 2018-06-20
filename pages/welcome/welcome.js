// pages/welcome/welcome.js
var app = getApp();
Page({
  data: {
    selected: true,
    selected1: false,
    isLogin:'是否授权登陆?',
    userInfo: {},
    location:{},
    tabBar: [
      { title: '主页', icon: '', type: 'warn', size: '20', color: 'red' },
      { title: '菜单栏', icon: '', type: 'success', size: '20', color: 'orange' },
      { title: '购物车', icon: '', type: 'info', size: '20', color: 'green' },
      { title: '个人中心', icon: '', type: 'waiting', size: '20', color: 'rgb(0,255,255)' }
    ],
    markers: [{
      iconPath: "/images/map/map1.png",
      id: 0,
      // latitude: 23.099994,
      // longitude: 113.324520,
      width: 20,
      height: 20
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: -113.324520,
        latitude: -23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }]
  },
  onLoad: function (options) {
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    if(!this.data.userInfo.nickName){
      app.getUserInfo(function (userInfo) {
      //更新数据
        that.setData({
          userInfo: userInfo,
          isLogin: '用户状态: 在线'
        });
      });
    }
    wx.getLocation({// 获取此时位置
      type: 'wgs84',
      success: function(res) {
        that.setData({
          location:res,
          "markers[0].latitude":res.latitude,
          "markers[0].longitude":res.longitude
        });
      }
    });
  },
  onGotUserInfo: function (e) {
    this.onLoad();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.redirectTo({
      url: '/pages/movie/movie'
    });
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
})