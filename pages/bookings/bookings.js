// pages/bookings/bookings.js
const app = getApp()


Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;


    // Get api data
    wx.request({
      // id: 20,
      url: `https://airlumni.herokuapp.com/api/v1/users/${app.globalData.userId}`,
      method: 'GET',
      success(res) {
        console.log("I want this")
        console.log('Please',res)
        const userData = res.data
        console.log(userData)
        userData.user.bookings.map((b) => {
          b.booking.start_time = Date.parse(b.booking.start_time)
          b.booking.end_time = Date.parse(b.booking.end_time)
          b.time_diff = Math.round(((b.booking.end_time - b.booking.start_time) / 3600000) * 100) / 100
          b.total_cost = (b.time_diff * b.service.price).toFixed(2)
          b.booking.start_time = Date(b.booking.start_time)
          b.booking.end_time = Date(b.booking.end_time)
        })
        if(userData.service) {
        userData.service.bookings.map((b) =>{
          b.booking.start_time = Date.parse(b.booking.start_time)
          b.booking.end_time = Date.parse(b.booking.end_time)
          b.time_diff = Math.round(((b.booking.end_time - b.booking.start_time) / 3600000) * 100) / 100
          b.total_cost = (b.time_diff * b.service.price).toFixed(2)
          b.booking.start_time = Date(b.booking.start_time)
          b.booking.end_time = Date(b.booking.end_time)
        })
        }
        // Update local data
        page.setData({
          userData: userData
        });

        console.log(userData)

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