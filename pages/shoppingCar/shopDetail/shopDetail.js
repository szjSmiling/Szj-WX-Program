const app = getApp()
Page({
  data:{
    shop:{
      name:"",des:"",url:"",
    },
  },
  onReady() {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    this.dialog.showDialog();
  },
  onLoad(e){// e 有其他页面携带的参数
    this.setData({
      "shop.name":e.id,
      "shop.url":e.url,
      "shop.des":e.id+e.url,
    });
  },
  _cancelEvent() {//取消事件
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  _confirmEvent() {//确认事件
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})