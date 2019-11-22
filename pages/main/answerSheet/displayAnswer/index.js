// pages/main/answerSheet/displayAnswer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:null,
  },
  /*changeAnswerSec0:function(e){
    console.log(e.target.id)
    var pages = getCurrentPages()
    var prePage = pages[pages.length - 2]
    prePage.setData({
      currentPart:0,
      currentQuestion:e.target.id,
    })
    if (this.data.currentPart == 0) {
      prePage.setData({
        displayNumber: this.data.currentQuestion + 1,
      })
    } else if (this.data.currentPart == 1) {
      prePage.setData({
        displayNumber: this.data.currentQuestion + 55,
      })
    }
    else if (this.data.currentPart == 2) {
      prePage.setData({
        displayNumber: this.data.currentQuestion + 76,
      })
    }
    console.log(prePage.data.currentPart)
    console.log(prePage.data.currentQuestion)
    wx.navigateBack({
      delta: 1,
    })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pages=getCurrentPages()
    var prePage=pages[pages.length-2]
    console.log(prePage)
    console.log(prePage.data.answer)
    this.setData({
      answer:prePage.data.answer
    })
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