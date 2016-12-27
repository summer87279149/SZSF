//index.js
//获取应用实例
var util = require('../../utils/util.js')
var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    color:["white","black","black"],
    shops:[],
    page:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  getdata:function(id,pageValue){

    var that = this
    if(pageValue==1){
      if(id=="one"){
      console.log("id=1啊")
      http.httpGet("/Toshop/index",{lng:app.gobleLon,lat:app.gobleLat,type:0,city:700100000,page:pageValue},function(res){
      console.log("返回结果是"+res.shop);
          that.setData({
            shops:res.shop,
            color:["white","black","black"]
          })
      })
    }else if(id=="two"){
      console.log("id=2啊")
      http.httpGet("/Toshop/index",{lng:app.gobleLon,lat:app.gobleLat,type:1,city:700100000,page:pageValue},function(res){
      console.log("返回结果是"+res.shop);
          that.setData({
            shops:res.shop,
            color:["black","white","black"]
          })
      })
    }else if(id=="three"){
      console.log("id=3啊")
      http.httpGet("/Toshop/index",{lng:app.gobleLon,lat:app.gobleLat,type:2,city:700100000,page:pageValue},function(res){
      console.log("返回结果是"+res.shop);
          that.setData({
            shops:res.shop,
            color:["black","black","white"]
          })
      })
    }else{
      console.log("点击无效区域")
    }

    }else{
      var array = that.data.shops;
      console.log("page＝"+pageValue);
        if(id=="one"){
      console.log("id=1啊")
      http.httpGet("/Toshop/index",{lng:app.gobleLon,lat:app.gobleLat,type:0,city:700100000,page:pageValue},function(res){
      console.log("返回结果是"+res.shop);
      for (var i=0;i<res.shop.length;i++){
              array.push(res.shop[i])
               console.log("打印一下数组:"+that.data.shop)
             } 
          that.setData({
            shops:array,
            color:["white","black","black"]
          })
      })
    }else if(id=="two"){
      console.log("id=2啊")
      http.httpGet("/Toshop/index",{lng:app.gobleLon,lat:app.gobleLat,type:1,city:700100000,page:pageValue},function(res){
        for (var i=0;i<res.shop.length;i++){
              array.push(res.shop[i])
               console.log("打印一下数组:"+that.data.shop)
             } 
      console.log("返回结果是"+res.shop);
          that.setData({
            shops:array,
            color:["black","white","black"]
          })
      })
    }else if(id=="three"){
      console.log("id=3啊")
      http.httpGet("/Toshop/index",{lng:app.gobleLon,lat:app.gobleLat,type:2,city:700100000,page:pageValue},function(res){
        for (var i=0;i<res.shop.length;i++){
              array.push(res.shop[i])
               console.log("打印一下数组:"+that.data.shop)
             } 
      console.log("返回结果是"+res.shop);
          that.setData({
            shops:array,
            color:["black","black","white"]
          })
      })
    }else{
      console.log("点击无效区域")
    }


    }
    
  },
  sortBtnClicked:function(btn){
    console.log(btn);
    var id =  btn.target.id;
     this.getdata(id,this.data.page);
  },
  onLoad: function () {
    console.log('onLoad')
    this.getdata("one",1);
  },
  upper:function(e){
    this.data.page=1;
    console.log("下拉page是:"+this.data.page);
    this.upOrLowerPull();
  },
  lower:function(e){
    this.data.page+=1;
    console.log("page是",this.data.page)
    this.upOrLowerPull();
  },
  upOrLowerPull:function(){
       //距离排序
    if(this.data.color[0]=="white"){
       this.getdata("one",this.data.page);
    }
    //销量排序
    if(this.data.color[1]=="white"){
       this.getdata("two",this.data.page);
    }
    //价格排序
    if(this.data.color[2]=="white"){
       this.getdata("three",this.data.page);
    }
  }
})
