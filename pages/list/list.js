// pages/list/list.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  cardClick: function (event) {
    console.log(event)
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
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
    let page = this;


    // Get api data
    wx.request({
      url: "https://airlumni.herokuapp.com/api/v1/services",
      method: 'GET',
      success(res) {
        const services = res.data.services;

        // Update local data
        page.setData({
          infoCard: services
        });

        console.log(services)

        wx.hideToast();
      }
    });

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