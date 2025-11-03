// 用户页面逻辑
Page({
  data: {
    userInfo: null,
    favoritesCount: 0
  },

  onLoad: function() {
    console.log('用户页面加载');
    this.loadUserInfo();
  },

  onShow: function() {
    // 每次显示页面时更新收藏数量
    this.updateFavoritesCount();
  },

  /**
   * 加载用户信息
   */
  loadUserInfo: function() {
    const app = getApp();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
  },

  /**
   * 更新收藏数量
   */
  updateFavoritesCount: function() {
    const app = getApp();
    this.setData({
      favoritesCount: app.globalData.favorites.length
    });
  },

  /**
   * 获取用户信息（登录）
   */
  getUserInfo: function(e) {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        console.log('获取用户信息成功:', res.userInfo);
        const app = getApp();
        app.globalData.userInfo = res.userInfo;
        this.setData({
          userInfo: res.userInfo
        });
      },
      fail: (err) => {
        console.log('获取用户信息失败:', err);
        wx.showToast({
          title: '登录失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  /**
   * 跳转到收藏页面
   */
  goToFavorites: function() {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/destination/destination?showFavorites=true'
    });
  },

  /**
   * 跳转到计划页面
   */
  goToPlans: function() {
    wx.showToast({
      title: '我的计划功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  /**
   * 跳转到历史记录页面
   */
  goToHistory: function() {
    wx.showToast({
      title: '浏览历史功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  /**
   * 跳转到设置页面
   */
  goToSettings: function() {
    wx.showToast({
      title: '设置功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  /**
   * 显示关于我们信息
   */
  showAbout: function() {
    wx.showModal({
      title: '关于旅行攻略',
      content: '旅行攻略小程序 v1.0.0\n\n为您提供全球旅行目的地的详细攻略，包括景点介绍、美食推荐、旅行建议等信息。\n\n© 2024 旅行攻略团队',
      showCancel: false,
      confirmText: '确定'
    });
  },

  /**
   * 显示意见反馈
   */
  showFeedback: function() {
    wx.showToast({
      title: '意见反馈功能开发中',
      icon: 'none',
      duration: 2000
    });
  }
});