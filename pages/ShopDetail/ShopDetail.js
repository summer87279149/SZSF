var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
     imgUrls: [],
     shopInfo:{},
  },
  onLoad: function (e) {
    console.log("页面传值",e)
    var that = this
    http.httpGet("/Shop/index",{lng:app.gobleLon,lat:app.gobleLat,sid:e.sid,userid:app.uid},function(res){
      console.log("返回值",res)
      that.setData({
        shopInfo:res.shop,
      })
    })
  }
})
