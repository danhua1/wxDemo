// pages/person/person.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count:30
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
        setTimeout(() => {
            this.setData({
                count:30
            })  
            wx.stopPullDownRefresh({
              success: (res) => {
                  console.log("停止下拉刷新成功")
              },
              fail:()=>{
                console.log("停止下拉刷新失败")
              }
            })
        }, 1000);
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("到底了");
        this.setData({
            count:this.data.count+30
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})