var app = getApp();
var mtabW;
Page({
  data: {
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0,
    toView:"total",
    loading:{
      text:"加载中...",
      hidden:false,
    },
    items:[
      {id:"综合",type:"total",img:"../../images/banner/b_car1.jpg"},
      {id:"艺术",type:"art",img:"../../images/banner/b_car3.jpg"},
      {id:"泥塑",type:"mud",img:"../../images/banner/b_car5.jpg"},
      {id:"纸面",type:"paper",img:"../../images/banner/b_car6.jpg"},
      {id:"布面",type:"cloth",img:"../../images/banner/b_car8.jpg"},
      {id:"油画",type:"oil",img:"../../images/banner/b_car9.jpg"},
      {id:"水墨画",type:"ink",img:"../../images/banner/b_car10.jpg"},
    ]
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //获取手机系统信息
        mtabW = res.windowWidth / 4;  //设置tab的宽度
        that.setData({
          tabW: mtabW
        })
      }
    })
  },
  onReady: function (){
    this.loadingTag = this.selectComponent("#loadTag");
    let that = this
    setTimeout(function(){
      that.setData({
        "loading.hidden":true
      });
    },1000);
  },
  bindViewTap: function () {
    wx.navigateTo({
// 只能跳转到非tabBar页面,wx.navigateTo保留当前页面,跳转下一页和wx.redirectTo关闭当前页面,
// 所以说用wx.navigateTo时,能用wx.navigateBack;delta属性可以通过数值设置返回的页数.
      url: './shopDetail/shopDetail'
    });
    // 如下:
    // wx.navigateBack({
    //   delta:1
    // })
  },
  tabClick: function (e) {
    var idIndex = e.currentTarget.dataset.index;
    var offsetW = e.currentTarget.offsetLeft;  //2种方法获取距离文档左边有多少距离
    // var query = wx.createSelectorQuery();
    // query.select('#scrollX').boundingClientRect();
    // query.selectViewport().scrollOffset();//这段代码的意思是获取页面滑动位置的查询请求
    // query.exec(function (res) {
    //   console.log(res)
    // });
    this.setData({
      activeIndex: idIndex,
      slideOffset: offsetW
    });
  },
  bindChange: function (e) {
    var current = e.detail.current;
    if ((current + 1) % 4 == 0) {
      
    }
    var offsetW = current * mtabW;    //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW
    });

  },
  onShareAppMessage: function () {
    return {
      title: '分享',
      path: '/index'
    }
  },
  tryCommunication(){
    this.loadingTag.cancel();
  },
})