// pages/main/answerSheet/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:[
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    currentPart:0,
    currentQuestion:0,
    displayNumber:1,
    wrongAnswer: [[],[],[]],
    markByPart:[0,0,0],
    rightAnswerByPart:[0,0,0],
    level:null,
    year:null,
    month:null,

  },
  showAnswer:function(e){
    wx.navigateTo({
      url: 'displayAnswer/index',
    })
  },
  chose1:function(e){
    this.data.answer[this.data.currentPart][this.data.currentQuestion]=1;
    this.setData({
      answer:this.data.answer
    })
    if(this.data.currentPart==0&&this.data.currentQuestion==53){
      this.setData({
        currentPart:1,
        currentQuestion:0,
      })
    }else if(this.data.currentPart==1&&this.data.currentQuestion==20){
        this.setData({
        currentPart: 2,
        currentQuestion: 0,
      })
    }else if(this.data.currentPart==2&&this.data.currentQuestion==31){
      //nothing
    }else{
      this.setData({
        currentQuestion: this.data.currentQuestion+1,
      })
    }
  },

  chose2: function (e) {
    this.data.answer[this.data.currentPart][this.data.currentQuestion] = 2;
    this.setData({
      answer: this.data.answer
    })
    if (this.data.currentPart == 0 && this.data.currentQuestion == 53) {
      this.setData({
        currentPart: 1,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1,
      })
    }
  },

  chose3: function (e) {
    this.data.answer[this.data.currentPart][this.data.currentQuestion] = 3;
    this.setData({
      answer: this.data.answer
    })
    if (this.data.currentPart == 0 && this.data.currentQuestion == 53) {
      this.setData({
        currentPart: 1,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1,
      })
    }
  },

  chose4: function (e) {
    this.data.answer[this.data.currentPart][this.data.currentQuestion] = 4;
    this.setData({
      answer: this.data.answer
    })
    if (this.data.currentPart == 0 && this.data.currentQuestion == 53) {
      this.setData({
        currentPart: 1,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1,
      })
    }
  },

  nextQues:function(e){
    if (this.data.currentPart == 0 && this.data.currentQuestion == 53) {
      this.setData({
        currentPart: 1,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0,
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1,
      })
    }
  },

  preQues: function (e) {
    if (this.data.currentPart == 0 && this.data.currentQuestion == 0) {
       //nothing
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 0) {
      this.setData({
        currentPart: 0,
        currentQuestion: 20,
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 0) {
      this.setData({
        currentPart: 1,
        currentQuestion: 31,
      })
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion - 1
      })
    }
  },
  goBack: function (e) {
    wx.navigateBack({
      delta: 1,
    })
  },
  send:function(e){
    var appInstance=getApp()
    var level = appInstance.globalData.level
    console.log(level)
    var date = appInstance.globalData.date
    console.log(date)
    console.log("before"+this.data.markByPart)
    console.log("before" + this.data.wrongAnswer)
    for(var i=0;i<this.data.answer.length;i++){
      for(var j=0;j<this.data.answer[i].length;j++){
        var theAns=this.data.answer[i][j]
        var rightAns=appInstance.globalData.rightAnswer[level][date][i][j]
        if(theAns==rightAns){
          this.data.markByPart[i]+=appInstance.globalData.markRule[i][j]
          this.data.rightAnswerByPart[i]++         
        }else{
          //this.data.wrongAnswer.push(obj)
          this.data.wrongAnswer[i].push(j)
        }
      }
    }
    console.log("after"+this.data.markByPart)
    console.log("after"+this.data.rightAnswerByPart)
    console.log("after"+this.data.wrongAnswer[0])
    console.log("after" + this.data.wrongAnswer[1])
    console.log("after" + this.data.wrongAnswer[2])

    wx.navigateTo({
      url: 'displayResult/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appInstance=getApp()
    var theLevel=appInstance.globalData.level
    var date=appInstance.globalData.date
    var dates=date.split("_")
    this.setData({
      level:theLevel,
      year:dates[0],
      month:dates[1],
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
    console.log("on show")
    console.log(this.data.currentPart)
    console.log(this.data.currentQuestion)
    this.setData({
      currentPart:this.data.currentPart,
      currentQuestion:this.data.currentQuestion,
    })
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