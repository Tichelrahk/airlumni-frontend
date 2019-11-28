App({
  onLaunch: function () {
    const page = this
    const host = page.globalData.url
    console.log('beginning login')
    //wx login api calls
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
        wx.request({
          url: host + 'login',
          method: 'POST',
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            console.log(res)
            page.globalData.userId = res.data.userId
          }
        })
      }
    })
  },

  globalData: {
    url: `http://localhost:3000/api/v1/`
    // url: `https://airlumni.herokuapp.com/api/v1/`
    }
})