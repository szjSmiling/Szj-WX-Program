var app = getApp();
var mtabW;
Page({
  data: {
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0,
    toView: "total",
    a: "aaa",
    b: "bbb",
    loading: {
      text: "加载中...",
      hidden: false,
      title: "我是父组件的内容"
    },
    items: [
      { id: "综合", type: "total", img: "../../images/banner/b_car1.jpg" },
      { id: "艺术", type: "art", img: "../../images/banner/b_car3.jpg" },
      { id: "泥塑", type: "mud", img: "../../images/banner/b_car5.jpg" },
      { id: "纸面", type: "paper", img: "../../images/banner/b_car6.jpg" },
      { id: "布面", type: "cloth", img: "../../images/banner/b_car8.jpg" },
      { id: "油画", type: "oil", img: "../../images/banner/b_car9.jpg" },
      { id: "水墨画", type: "ink", img: "../../images/banner/b_car10.jpg" },
    ],
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        name: "日本资生堂洗颜", price: 200, isSelect: false,
        // 数据设定
        count: { quantity: 2, min: 1, max: 20 },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        name: "倩碧焕妍活力精华露", price: 340, isSelect: false,
        // 数据设定
        count: { quantity: 1, min: 1, max: 20 },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        name: "特效润肤露", price: 390, isSelect: false,
        // 数据设定
        count: { quantity: 3, min: 1, max: 20 },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        name: "倩碧水嫩保湿精华面霜", price: 490, isSelect: false,
        // 数据设定
        count: { quantity: 1, min: 1, max: 20 },
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        name: "兰蔻清莹柔肤爽肤水", price: 289, isSelect: false,
        // 数据设定
        count: { quantity: 10, min: 1, max: 20 },
      },
      {
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
        name: "LANCOME兰蔻小黑瓶精华", price: 230, isSelect: false,
        count: { quantity: 1, min: 1, max: 20 },
      },
    ],
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
  onReady: function () {// 利用自己的方法,取消loading
    this.loadingTag = this.selectComponent("#loadTag");
    let that = this
    setTimeout(function () {
      that.setData({
        "loading.hidden": true
      });
    }, 1000);
  },
  bindViewTap: function (event) {
    // 只能跳转到非tabBar页面,wx.navigateTo保留当前页面,跳转下一页;wx.redirectTo关闭当前页面,
    // 所以说用wx.navigateTo时,能用wx.navigateBack;delta属性可以通过数值设置返回的页数.
    let id = event.currentTarget.dataset.id;
    let url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: './shopDetail/shopDetail?id=' + id + "&url=" + url
    });
    // 如下:
    // wx.navigateBack({
    //   delta:1
    // });
    // wx.redirectTo({
    //   url:"./shopDetail/shopDetail?title=shop"
    // });
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
  tryCommunication(e) {// 利用触发子组件的方法,取消loading
    e.detail;// 自定义组件触发事件时提供的detail对象
    // this.loadingTag.cancel();
  },
  // 购物车逻辑
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  allSelect: function (e) {//全选
    let i = 0;//处理全选逻辑
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price;
      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  toBuy() {// 去结算
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  handleQuantityChange(e) {//数量变化处理
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  }
})