var util = require('../../utils/util.js')
var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    lon:"",
    lat:"",
    imgUrls: [
      
    ],
    homebanner:[],
    shops:[],
    cell: {}

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getdata:function(){
    var that = this
      util.getLonLat(function(lon1,lat1){
          console.log("得到的地址是:",lon1,lat1)
          that.setData({
            lon:lon1,
            lat:lat1
          })
      app.gobleLon=lon1;
      app.gobleLat=lat1;
      var url="/Index/index?lng="+lon1+"&lat="+lat1+"&city=700100000";
      http.httpGet(url,{
      },function (res){
        console.log("cell的个数是"+res.homebanner.length);
        for (var i=0;i<res.homebanner.length;i++){
         that.data.homebanner.push(res.homebanner[i].banner)
        } 
        var array = that.data.homebanner;
          that.setData({
            cell:res,
            imgUrls:array,
            shops:res.recommendshop
          });

      });
      })
  },
  upper:function(){
    console.log("首页下拉刷新")
    //清空数组
    this.data.homebanner.length=0;
    this.getdata();
  },
  lower:function(){
    console.log("首页上拉")
  },
  onLoad: function () {
      this.getdata();
  
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})