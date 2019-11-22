// pages/main/examDate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goBack:function(e){
    wx:wx.navigateBack({
      delta: 1,
    })
  },
  handle2010_7:function(e){
    var appInstance=getApp()
    appInstance.globalData.date="2010_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  handle2010_12: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2010_12"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2011_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2011_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2011_12: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2011_12"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2012_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2012_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2012_12: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2012_12"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2013_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2013_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2014_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2014_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2015_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2015_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2016_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2016_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2016_12: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2016_12"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2017_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2017_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2017_12: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2017_12"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2018_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2018_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2018_12: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2018_12"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }, handle2019_7: function (e) {
    var appInstance = getApp()
    appInstance.globalData.date = "2019_7"
    console.log(appInstance.globalData.date)
    console.log(appInstance.globalData.level)
    wx.navigateTo({
      url: '../answerSheet/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})