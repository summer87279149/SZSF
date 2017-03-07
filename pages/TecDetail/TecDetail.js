var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
    cellArr:[],
    tecInfo:{}
  },
  onLoad: function (e) {
    console.log('tid是',e);
    var tecid = e.tid
    var that = this
    http.httpGet("/Tech/index",{tid:tecid,userid:app.uid},function(res){
        console.log('返回数据是',res);
        that.setData({
            cellArr:res.project,
            tecInfo:res.tech
        })
    })
  }
})
