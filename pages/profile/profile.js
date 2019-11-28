// pages/profile/profile.js
Page({

  goToConfirm: function (e) {
    console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/confirm/confirm?id=${id}`
    })
  },

  /**
   * Page initial data
   */

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    let page = this;


    // Get api data
    wx.request({
      url: `https://airlumni.herokuapp.com/api/v1/services/${options.id}`,
      method: 'GET',
      success(res) {
        console.log("I want this")
        console.log(res)
        const service = res.data

        // Update local data
        page.setData({
          service: service
        });

        console.log(service)

        wx.hideToast();
      }
    });


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