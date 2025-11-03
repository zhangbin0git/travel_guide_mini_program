// 目的地页面逻辑
Page({
  data: {
    destinations: [
      {
        id: 1,
        name: '北京',
        description: '中国的首都，拥有悠久的历史和丰富的文化遗产，包括故宫、长城、天坛等著名景点。',
        image: 'https://images.unsplash.com/photo-1536405018788-97a83f2e5125?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        score: 4.8,
        travelers: 1258000,
        tags: ['历史文化', '古都', '美食', '购物']
      },
      {
        id: 2,
        name: '上海',
        description: '中国最大的城市，国际大都市，拥有外滩、东方明珠、迪士尼乐园等著名景点。',
        image: 'https://images.unsplash.com/photo-1548437096-47087767129c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        score: 4.7,
        travelers: 1123000,
        tags: ['现代都市', '购物', '美食', '主题乐园']
      },
      {
        id: 3,
        name: '成都',
        description: '四川省省会，以美食、休闲生活和大熊猫基地而闻名，是中国西南地区的重要城市。',
        image: 'https://images.unsplash.com/photo-1582050129314-d9220c6f0960?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        score: 4.9,
        travelers: 987000,
        tags: ['美食', '休闲', '大熊猫', '历史']
      },
      {
        id: 4,
        name: '杭州',
        description: '浙江省省会，以西湖美景闻名于世，被称为"人间天堂"，拥有丰富的历史文化资源。',
        image: 'https://images.unsplash.com/photo-1587448808841-887a782565e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        score: 4.8,
        travelers: 865000,
        tags: ['自然风光', '历史文化', '美食', '休闲']
      },
      {
        id: 5,
        name: '西安',
        description: '陕西省省会，十三朝古都，拥有兵马俑、大雁塔等世界文化遗产，是中华文明的重要发源地。',
        image: 'https://images.unsplash.com/photo-1549888766-9085712377a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        score: 4.8,
        travelers: 756000,
        tags: ['历史文化', '古都', '美食', '博物馆']
      },
      {
        id: 6,
        name: '三亚',
        description: '海南省的热带海滨城市，拥有美丽的海滩、椰林和温暖的气候，是著名的度假胜地。',
        image: 'https://images.unsplash.com/photo-1529390207387-45d8193a093e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        score: 4.7,
        travelers: 689000,
        tags: ['海滨度假', '热带', '美食', '休闲']
      }
    ],
    filteredDestinations: [],
    filterTags: ['历史文化', '美食', '自然风光', '海滨度假', '现代都市', '古都', '休闲'],
    activeTag: '',
    searchKeyword: ''
  },

  onLoad: function(options) {
    // 初始化时显示所有目的地
    this.setData({
      filteredDestinations: this.data.destinations
    });

    // 处理从其他页面传递过来的参数
    if (options.keyword) {
      this.setData({
        searchKeyword: options.keyword
      });
      this.onSearch();
    } else if (options.tag) {
      this.onTagSelect({ currentTarget: { dataset: { tag: options.tag } } });
    }
  },

  onSearchInput: function(e) {
    this.setData({
      searchKeyword: e.detail.value
    });
  },

  onSearch: function() {
    const keyword = this.data.searchKeyword.toLowerCase();
    const filtered = this.data.destinations.filter(item => 
      item.name.toLowerCase().includes(keyword) || 
      item.description.toLowerCase().includes(keyword) ||
      item.tags.some(tag => tag.toLowerCase().includes(keyword))
    );
    this.setData({
      filteredDestinations: filtered,
      activeTag: '' // 搜索时重置标签选择
    });
  },

  onTagSelect: function(e) {
    const tag = e.currentTarget.dataset.tag;
    let filtered;

    if (tag === '') {
      // 选择"全部"，显示所有目的地
      filtered = this.data.destinations;
    } else {
      // 根据标签筛选
      filtered = this.data.destinations.filter(item => item.tags.includes(tag));
    }

    this.setData({
      activeTag: tag,
      filteredDestinations: filtered,
      searchKeyword: '' // 选择标签时重置搜索框
    });
  },

  goToDetail: function(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  onPullDownRefresh: function() {
    // 下拉刷新
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  }
});