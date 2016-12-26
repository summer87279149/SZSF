//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    cells:["个人信息","我的关注","我的收藏","服务订单","反馈投诉"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
        console.log("用户信息是:"+userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
