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
    wrongAnswer:[],
    markByPart:[0,0,0],
    rightAnswerByPart:[0,0,0],

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
        currentQuestion:0
      })
    }else if(this.data.currentPart==1&&this.data.currentQuestion==20){
        this.setData({
        currentPart: 2,
        currentQuestion: 0
      })
    }else if(this.data.currentPart==2&&this.data.currentQuestion==31){
      //nothing
    }else{
      this.setData({
        currentQuestion: this.data.currentQuestion+1
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
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1
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
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1
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
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1
      })
    }
  },

  nextQues:function(e){
    if (this.data.currentPart == 0 && this.data.currentQuestion == 53) {
      this.setData({
        currentPart: 1,
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 20) {
      this.setData({
        currentPart: 2,
        currentQuestion: 0
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 31) {
      //nothing
    } else {
      this.setData({
        currentQuestion: this.data.currentQuestion + 1
      })
    }
  },

  preQues: function (e) {
    if (this.data.currentPart == 0 && this.data.currentQuestion == 0) {
       //nothing
    } else if (this.data.currentPart == 1 && this.data.currentQuestion == 0) {
      this.setData({
        currentPart: 0,
        currentQuestion: 20
      })
    } else if (this.data.currentPart == 2 && this.data.currentQuestion == 0) {
      this.setData({
        currentPart: 1,
        currentQuestion: 31
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
    for(var i=0;i<this.data.answer.length;i++){
      console.log(i)
      for(var j=0;i<this.data.answer[i].length;j++){
        var theAns=this.data.answer[i][j]
        var rightAns=appInstance.globalData.rightAnswer[level][date][i][j]
        console.log(theAns)
        console.log(rightAns)
        /*if(theAns==rightAns){
          console.log("right")
          this.data.markByPart[i]+=appInstance.globalData.markRule[i][j]
          this.data.rightAnswerByPart[i]++
          this.setData({
            markByPart: this.data.markByPart,
            rightAnswerByPart: this.data.rightAnswerByPart,
          })
        }/*else{
          console.log("wrong")
          this.data.wrongAnswer = [{ partNum:i,questNum:j, rightAnswer: rightAns,yourAnswer:theAns }].concat(this.data.wrongAnswer)
          this.setData({
            wrongAnswer: this.data.wrongAnswer,
          })
        }*/
      }
    }

    console.log("after"+this.data.markByPart)
    console.log("after"+this.data.rightAnswerByPart)
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