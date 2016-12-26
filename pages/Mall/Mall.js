var util = require('../../utils/util.js')
var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
    images:[],
    pageValue:1,
    products:[],
    overflow:"",
    temArr:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
   getdata:function(){
      var url="/Market/index";
      var that = this
     http.httpGet(url,{page:that.data.pageValue},function(res){
       console.log("商城返回:"+res.prodbanner[0].banner)
       
       for(var i=0;i<res.prodbanner.length;++i){
         that.data.temArr.push(res.prodbanner[i].banner)
       }
       var array = that.data.temArr
       that.setData({
            images:array,
            products:res.product,
            overflow:res.overflow
          });
     })
   },
  onLoad: function () {
    var that = this
    this.getdata();
    console.log('onLoad')
    
    
  }
})
