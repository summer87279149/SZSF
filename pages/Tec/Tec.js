var util = require('../../utils/util.js')
var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    infoText:"",
    overflow:"",
    technician:[],
    page:1
  },
  getdata:function(page){
      var that = this
      http.httpGet("/Tohome/index",{lng:app.gobleLon,lat:app.gobleLat,page:page},function(res){
        
        if (page==1){
          that.setData({
            infoText:res.instruction.inst,
            overflow:res.overflow,
            technician:res.technician
          })
        }else{
           var array = that.data.technician;
          for (var i=0;i<res.technician.length;i++){
              array.push(res.technician[i])
               console.log("打印一下数组:"+that.data.technician)
             } 
          that.setData({
             infoText:res.instruction.inst,
             overflow:res.overflow,
             technician:array
           })
          
        }
        
      })
  },
  queryBtnClicked:function(){
     var that = this
     that.data.page=1
     console.log("点击button，page是:"+that.data.page);
     this.getdata(that.data.page)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
   this.getdata();
  },
  upper: function(e) {
    var that = this
     that.data.page =1
     console.log("下拉刷新page是:"+that.data.page);
     this.getdata(that.data.page)
    
  },
  lower: function(e) {
      var that = this
     that.data.page+=1
    console.log("上拉刷新page是:"+that.data.page);
  if(that.data.overflow=="0"){
     console.log("开始加载数据,没有溢出,overflow="+that.data.overflow)
      this.getdata(that.data.page)
  }else{
    console.log("溢出,不加载,overflow="+that.data.overflow)
  }
   
  }



})