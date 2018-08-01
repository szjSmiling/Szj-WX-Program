var app = getApp();
Page({
  data: {
    open:false
  },
  onLoad: function () {
    
  },
  //事件处理函数
  tap_ch(){
    this.setData({
      open: !this.data.open
    })
  }
})