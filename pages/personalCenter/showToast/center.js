// pages/personalCenter/center.js
var app = getApp();
Page({
  data: {
    loading:true,
    actionSheetHidden:true,
    actionSheetItems:["选项一","选项二","选项三","选项四"],
  },
  onLoad:function(){
    
  },
  sheetBtn(e){
    console.log('action-sheet即将移除,请使用api调用');
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange(e){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  sheetBtn2(e){
    wx.showActionSheet({
      itemList:['A','B','C'],
      success:res=>{
        console.log(res.tapIndex)
      },
      fail:err =>{
        console.log(err.errMsg)
      }
    })
  },
  loadBtn1(){
    wx.showToast({
      title:'加载中1...',
      icon:'loading',
      duration:1500
    });
    this.setData({
      loading:!this.data.loading
    });
  },
  loadBtn2(){
    wx.showLoading({
      title:'加载中2...',
      image:'../../../images/loadIcon/loadIcon1.gif'
    });
    setTimeout(function(){
      wx.hideLoading();
    },1500)
  },
  loadBtn3(){
    wx.showToast({
      title:'加载中3...',
      icon:'loading',
      duration:1500
    });
    wx.openSetting({
      success: (res) => {
        /*
         * res.authSetting = {
         *   "scope.userInfo": true,
         *   "scope.userLocation": true
         * }
         */
      }
    })
  }
})