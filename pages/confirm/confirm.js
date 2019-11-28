
const app = getApp()


// pages/confirm/confirm.js
Page({
  data: {
    st_date: '2019-11-27',
    st_time: '12:00',
    end_date: '2019-12-30',
    end_time: '1:00'
  },

  // goToBookings: function () {
  //   wx.switchTab({
  //     url: '/pages/bookings/bookings',
  //   })
  // },

 

  createNewBooking: function (event) {
    console.log('dateTime', event)
    console.log(app.globalData.userId)
    const book = {}
    // console.log(3,book)
    book.start_time = new Date(event.detail.value.start_date+ " "+ event.detail.value.start_time);
    book.end_time = new Date(event.detail.value.end_date + ' ' + event.detail.value.end_time);
    console.log(book.start_time.toUTCString());
    // console.log(10,book.start_time)
    // let dateTime = new Date(book.start_time);
    wx.request({ 
      url: `https://airlumni.herokuapp.com/api/v1/services/${event.detail.target.dataset.id}/bookings?user_id=${app.globalData.userId}`,
      method: 'POST',
      data: book,
      
      success() {
        wx.switchTab({
          url: '/pages/bookings/bookings',
        })
      }
    });

  },
  
  bindStartDateChange: function (e) {
    console.log('date', e.detail.value)
    this.setData({
      st_date: e.detail.value
    })
  },
  bindStartTimeChange: function (e) {
    console.log('time', e.detail.value)
    this.setData({
      st_time: e.detail.value
    })
  },
  bindEndDateChange: function (e) {
    console.log('date', e.detail.value)
    this.setData({
      end_date: e.detail.value
    })
  },
  bindEndTimeChange: function (e) {
    console.log('time', e.detail.value)
    this.setData({
      end_time: e.detail.value
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
      url: `https://airlumni.herokuapp.com/api/v1/services/${options.id}bookings?user_id=${app.globalData.userId}`,
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