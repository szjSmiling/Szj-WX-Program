var app = getApp();
Page({
  data: {
    navLeftItems: [
      {id:0,tree:{desc:"聚划算"}},
      {id:1,tree:{desc:"天猫"}},
      {id:2,tree:{desc:"天猫国际"}},
      {id:3,tree:{desc:"外卖"}},
      {id:4,tree:{desc:"天猫超市"}},
      {id:5,tree:{desc:"充值中心"}},
      {id:6,tree:{desc:"阿里旅行"}},
      {id:7,tree:{desc:"领金币"}},
      {id:8,tree:{desc:"到家"}},
      {id:9,tree:{desc:"分类"}},
      {id:10,tree:{desc:"男人装"}},
      {id:11,tree:{desc:"女人装"}},
    ],
    navRightItems: [
      {id:0,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_01.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_02.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_03.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_04.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_05.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_06.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_07.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_08.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_09.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_10.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_11.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/water/water_12.png'},
      ]}},
      {id:1,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-01.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-02.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-03.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-04.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-05.png'},
      ]}},
      {id:2,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-06.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-07.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-08.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-09.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/carBrand/car-brand-10.png'},
      ]}},
      {id:3,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_01.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_02.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_03.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_04.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_05.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_06.png'},
      ]}},
      {id:4,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_01.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_02.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_03.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_04.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_05.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_06.png'},
      ]}},
      {id:5,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/emotionIcon/emotion_01.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/emotionIcon/emotion_02.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/emotionIcon/emotion_03.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/emotionIcon/emotion_04.png'},
        {desc:'品牌',desc2:'其他',logo:'../../images/emotionIcon/emotion_05.png'},
      ]}},
      {id:6,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_08.png'},
      ]}},
      {id:7,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_09.png'},
      ]}},
      {id:8,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_10.png'},
      ]}},
      {id:9,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_11.png'},
      ]}},
      {id:10,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_12.png'},
      ]}},
      {id:11,tree:{id:0,nodes:[
        {desc:'品牌',desc2:'其他',logo:'../../images/furnitureBrand/brand_13.png'},
      ]}},
    ],
    curNav: 0,
    curIndex: 0
  },
  onLoad: function () {
    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
    var that = this
    // wx.request({
    //   url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       navLeftItems: res.data,
    //       navRightItems: res.data
    //     })
    //   }
    // })
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})