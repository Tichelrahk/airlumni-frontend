const app = getApp()
// pages/add_serv/add_serv.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  formSubmit: function (event) {
    // console.log(10,event)
    const form = {}
    console.log(event);
    form.name = event.detail.value.name
    form.description = event.detail.value.description
    form.price = event.detail.value.price
    form.user_id = app.globalData.userId
    console.log(10, form.user_id)
    console.log(77,form);
    wx.request({
      url: `http://airlumni.herokuapp.com/api/v1/services`,
      method: 'POST',
      data: form,
      success(res) {
        console.log(res)
        // redirect to index page when done
        wx.switchTab({
          url: '/pages/profile/profile',
        })
      }
    });

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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