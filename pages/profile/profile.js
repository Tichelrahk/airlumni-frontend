// pages/profile/profile.js
const app = getApp()
Page({

  

  data: {},

  /**
   * Page initial data
   */

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    let page = this;
    let userInfo = app.globalData.userInfo;

    this.setData({
      userInfo
    })

   

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