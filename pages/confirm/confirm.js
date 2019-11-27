

// pages/confirm/confirm.js
Page({
  data: {
    date: '2019-11-27',
    time: '12:00',
    date1: '2019-12-30',
    time1: '1:00'
  },

  goToBookings: function () {
    wx.switchTab({
      url: '/pages/bookings/bookings',
    })
  },

  // goToBooking: function (event) {
  //   console.log('dateTime', event.detail.value)
  //   const book = {}
    
  //   console.log(event);
  //   book.start_time = event.detail.value.start_date, 
  //   book.end_time = event.detail.value.end_date
  //   console.log(11, book);
  //   wx.request({
  //     url: `https://airlumni.herokuapp.com/api/v1/services`,
  //     method: 'POST',
  //     data: book,
  //     success() {
  //       wx.switchTab({
  //         url: '/pages/bookings/bookings',
  //       })
  //     }
  //   });

  // },
  
  bindDateChange: function (e) {
    console.log('date', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('time', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    console.log(options)


    // Get api data
    wx.request({
      url: `https://airlumni.herokuapp.com/api/v1/services/${options.id}`,
      method: 'GET',
      success(res) {
        
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