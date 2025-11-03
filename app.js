// app.js
App({
  onLaunch: function () {
    // 小程序启动时执行的逻辑
    console.log('小程序启动');
    
    // 可以在这里进行登录、获取用户信息等初始化操作
    this.getUserInfo();
    
    // 从本地存储获取收藏数据
    const favorites = wx.getStorageSync('favorites') || [];
    this.globalData.favorites = favorites;
  },
  
  onShow: function () {
    // 小程序显示时执行
    console.log('小程序显示');
  },
  
  onHide: function () {
    // 小程序隐藏时执行
    console.log('小程序隐藏');
  },
  
  getUserInfo: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
            }
          })
        }
      }
    })
  },
  
  // 收藏/取消收藏目的地
  toggleFavorite: function(id, destination) {
    const index = this.globalData.favorites.findIndex(item => item.id === id);
    if (index > -1) {
      // 取消收藏
      this.globalData.favorites.splice(index, 1);
    } else {
      // 添加收藏
      this.globalData.favorites.push(destination);
    }
    // 保存到本地存储
    wx.setStorageSync('favorites', this.globalData.favorites);
    return index > -1; // 返回是否是取消收藏操作
  },
  
  // 检查是否已收藏
  isFavorited: function(id) {
    return this.globalData.favorites.some(item => item.id === id);
  },
  
  globalData: {
    userInfo: null,
    favorites: []
  }
})