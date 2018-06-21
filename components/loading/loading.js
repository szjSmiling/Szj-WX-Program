Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'loading...',
      observer:function(){console.log()}
    },
    hidden:{
      type: Boolean,
      value: false,
      observer:function(){console.log()}
    }
  },
  data: {
    // 这里是一些组件内部数据
    obj: {}
  },
  methods: {
    // 这里是自定义方法
    cancel(){
      console.log("触发取消!");
    },
    _click: function(){
      this.triggerEvent("cencelEvent");//triggerEvent函数接受三个值：事件名称、数据、选项值  
    }
  }
})