// pages/personalCenter/center.js
var app = getApp();
Page({
  data: {
  
  },
  onLoad: function (options) {
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  loadBtn1(){
    wx.showToast({
      title:'加载中...',
      icon:'loading',
      duration:1500
    })
  },
  loadBtn2(){
    wx.showLoading({
      title:'当前加载中...',
    })
    setTimeout(function(){
      wx.hideLoading();
    },1500)
  },
  loadBtn3(){
    wx.showToast({
      title:'加载中...',
      icon:'loading',
      duration:1500
    })
  }
})