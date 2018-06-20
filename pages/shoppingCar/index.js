var app = getApp();
var mtabW;
Page({
  data: {
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0,
    tabs: ["综合与绘画", "艺术喷漆", "泥塑", "纸面绘画", "布面绘画", "中国油画", "水墨画"],
    items:[
      "../../images/banner/b_car1.jpg",
      "../../images/banner/b_car3.jpg",
      "../../images/banner/b_car5.jpg",
      "../../images/banner/b_car6.jpg",
      "../../images/banner/b_car8.jpg",
      "../../images/banner/b_car9.jpg",
      "../../images/banner/b_car10.jpg",
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
    });

  },
  bindViewTap: function () {
    console.log("00");
    wx.navigateTo({
      url: '../welcome/welcome'
    })
  },
  tabClick: function (e) {
    var idIndex = e.currentTarget.id;
    var offsetW = e.currentTarget.offsetLeft;  //2种方法获取距离文档左边有多少距离
    var query = wx.createSelectorQuery();
    query.select('#scrollX').boundingClientRect();
    query.selectViewport().scrollOffset();//这段代码的意思是获取页面滑动位置的查询请求
    query.exec(function (res) {
      console.log(res)
    });
    this.setData({
      activeIndex: idIndex,
      slideOffset: offsetW
    });
    // console.log(mLeft)
    if(idIndex + 2 % 4 == 0){
      this.setData({
        slideOffset: offsetW
      });
    }
  },
  bindChange: function (e) {
    var current = e.detail.current;
    console.log(current)
    if ((current + 1) % 4 == 0) {
      
    }
    var offsetW = current * mtabW;    //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW
    });

  }

})