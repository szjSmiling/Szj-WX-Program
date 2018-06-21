const app = getApp()
Page({
  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    console.log(this.dialog);
  },
  showDialog() {
    this.dialog.showDialog();
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