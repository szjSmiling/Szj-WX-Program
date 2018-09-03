Component({
  properties:{
    innerText: {
      type: String,
      value: 'loading...',
      observer:function(val,oldVal){
        console.log(val+"****"+oldVal)
      }
    },
  },
  data: {
    _a:"aa",
  },
  created () {
    console.log(this);
  },
  attached(){
    this.setData({
      title:"想要阻止冒泡(或者组件内部点击函数)，请使用catchtap"
    })
  },
  methods: {
    // 这里是自定义方法
    cancel(){
      this.setData({
        hidden:true,
      })
    },
    childEvent(){
      var myEventDetail = {}; // detail对象，提供给事件监听函数
      var myEventOption = {}; // 触发事件的选项{ bubbles: false, composed: false, capturePhase: false }
      this.triggerEvent('cencelEvent', myEventDetail,{ bubbles: false, composed: false, capturePhase: false });//通过triggerEvent指定A页面中的cencelEvent是见面，从而触发页面A中的tryCommunication自定义事件
    }
  }
})