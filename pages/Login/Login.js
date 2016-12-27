var http = require('../../utils/httpHelper.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    loginInfo:"",
    toastHidden:true
  },
  onLoad: function () {
    var that = this
  },
  toastChange:function(){
     this.setData({
            toastHidden:true,
            loginInfo:""
          })
  },
  formSubmit: function(e) {
    var that = this
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var url="/User/login"
    http.httpPost(url,e.detail.value,function(res){
      console.log(res)
      that.setData({
            toastHidden:false,
            loginInfo:res.msg
          })
      if(res.status=="success"){
          
      }else{
        
      }
    })
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})
