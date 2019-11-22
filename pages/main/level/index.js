// pages/main/level/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleN1: function (e) {
    console.log("N1")
    var appInstance = getApp()
    appInstance.globalData.level = "N1"
    wx.navigateTo({
      url: 'errorMessage/index',
    })
  },
  handleN2: function (e) {
    console.log("N2")
    var appInstance = getApp()
    appInstance.globalData.level = "N2"
    console.log(appInstance.globalData.level)
    console.log(appInstance.globalData.markRule[0].length)
    console.log(appInstance.globalData.markRule[1].length)
    console.log(appInstance.globalData.markRule[2].length)
    wx.navigateTo({
      url: '../examDate/index',
    })
  },
  handleN3: function (e) {
    console.log("N3")
    var appInstance = getApp()
    appInstance.globalData.level = "N3"
    wx.navigateTo({
      url: 'errorMessage/index',
    })
  },
  handleN4: function (e) {
    console.log("N4")
    var appInstance = getApp()
    appInstance.globalData.level = "N4"
    wx.navigateTo({
      url: 'errorMessage/index',
    })
  },
  handleN5: function (e) {
    console.log("N5")
    var appInstance = getApp()
    appInstance.globalData.level = "N5"
    wx.navigateTo({
      url: 'errorMessage/index',
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