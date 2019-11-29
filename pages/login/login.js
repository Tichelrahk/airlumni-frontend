// pages/login/login.js
let app = getApp()
Page({
 
  /**
   * Page initial data
   */
  data: {
    userId: "" 
  },
  updateUser: function (e) {
    const userId = app.globalData.userId
    // console.log(userId)
    const info = {
      name: e.detail.userInfo.nickName,
      // description: '',
      profile_picture: e.detail.userInfo.avatarUrl,
      location: e.detail.userInfo.city
    }
    // console.log(info)
    // console.log(app.globalData.userId)
    wx.request({
      url: app.globalData.url + `users/${userId}`,
      method: "PUT",
      data: info,
      success(res) {
        console.log(res)
        console.log(`Updated user ${userId}`)


        wx.navigateBack({
          

       
        })
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    app.globalData.login = true
    this.setData({
      userInfo: e.detail.userInfo

    })
    this.updateUser(e)
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data.userId = app.globalData.userId
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})