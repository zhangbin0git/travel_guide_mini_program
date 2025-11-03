// 首页逻辑
Page({
  data: {
    banners: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      }
    ],
    popularDestinations: [
      {
        id: 1,
        name: '北京',
        description: '古都风韵，现代魅力的完美融合',
        image: 'https://images.unsplash.com/photo-1536405018788-97a83f2e5125?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 2,
        name: '上海',
        description: '国际大都市，东方巴黎',
        image: 'https://images.unsplash.com/photo-1548437096-47087767129c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 3,
        name: '成都',
        description: '美食之都，休闲生活',
        image: 'https://images.unsplash.com/photo-1582050129314-d9220c6f0960?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 4,
        name: '杭州',
        description: '人间天堂，西湖美景',
        image: 'https://images.unsplash.com/photo-1587448808841-887a782565e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      }
    ],
    guides: [
      {
        id: 101,
        title: '北京三日游完全攻略，带你领略古都风采',
        image: 'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        createTime: '2024-01-15',
        author: '旅行达人'
      },
      {
        id: 102,
        title: '上海迪士尼乐园游玩指南，教你一天玩转热门项目',
        image: 'https://images.unsplash.com/photo-1587448808841-887a782565e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        createTime: '2024-01-10',
        author: '游乐专家'
      },
      {
        id: 103,
        title: '成都美食地图，必吃地道川菜TOP10',
        image: 'https://images.unsplash.com/photo-1582050129314-d9220c6f0960?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        createTime: '2024-01-05',
        author: '吃货小王'
      }
    ],
    tags: ['亲子游', '美食', '摄影', '徒步', '自驾游', '历史文化', '海滨度假', '冬季滑雪'],
    searchText: ''
  },

  onLoad: function() {
    console.log('首页加载');
    // 这里可以调用API获取数据，现在使用模拟数据
  },

  onSearchInput: function(e) {
    this.setData({
      searchText: e.detail.value
    });
  },

  onSearch: function() {
    if (this.data.searchText.trim()) {
      wx.navigateTo({
        url: `/pages/destination/destination?keyword=${this.data.searchText}`
      });
    }
  },

  onBannerTap: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  onTagTap: function(e) {
    const tag = e.currentTarget.dataset.tag;
    wx.navigateTo({
      url: `/pages/destination/destination?tag=${tag}`
    });
  },

  onShareAppMessage: function() {
    return {
      title: '旅行攻略小程序，带你发现美好旅程',
      path: '/pages/index/index'
    };
  }
});