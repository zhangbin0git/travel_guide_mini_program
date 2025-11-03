// 详情页逻辑
Page({
  data: {
    destination: {
      // 默认数据，实际会根据ID加载
    },
    isFavorited: false
  },

  onLoad: function(options) {
    const id = parseInt(options.id);
    console.log('加载目的地详情，ID:', id);
    
    // 获取目的地详细数据
    this.loadDestinationDetail(id);
    
    // 检查是否已收藏
    const app = getApp();
    this.setData({
      isFavorited: app.isFavorited(id)
    });
  },

  /**
   * 加载目的地详细数据
   * @param {number} id 目的地ID
   */
  loadDestinationDetail: function(id) {
    // 这里应该调用API获取数据，现在使用模拟数据
    const destinationsDetail = {
      1: {
        id: 1,
        name: '北京',
        description: '中国的首都，拥有悠久的历史和丰富的文化遗产。',
        images: [
          'https://images.unsplash.com/photo-1536405018788-97a83f2e5125?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1589319804455-84d5774f979a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        score: 4.8,
        travelers: 1258000,
        tags: ['历史文化', '古都', '美食', '购物'],
        introduction: '<p>北京是中华人民共和国的首都，是全国的政治中心、文化中心和国际交往中心。</p><p>北京有着3000多年的建城史和850多年的建都史，是中国历史上最后五个朝代的都城。</p><p>北京拥有众多历史文化遗产，包括故宫、长城、天坛、颐和园、明十三陵等，其中故宫、长城、周口店北京人遗址、天坛、颐和园和大运河均被列入世界文化遗产名录。</p><p>除了丰富的历史文化景点，北京还有现代化的城市风貌，如国家大剧院、水立方、鸟巢等奥运场馆，以及三里屯、王府井等购物娱乐区。</p><p>北京的美食也非常有名，如烤鸭、炸酱面、豆汁儿、焦圈等传统小吃，让游客流连忘返。</p>',
        attractions: [
          {
            name: '故宫',
            description: '世界上现存规模最大、保存最为完整的木质结构古建筑之一',
            image: 'https://images.unsplash.com/photo-1536405018788-97a83f2e5125?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '门票：60元'
          },
          {
            name: '长城',
            description: '世界文化遗产，中华民族的象征',
            image: 'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '门票：40元'
          },
          {
            name: '天坛',
            description: '明清两代皇帝祭天祈谷的圣地',
            image: 'https://images.unsplash.com/photo-1589319804455-84d5774f979a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '门票：15元'
          }
        ],
        bestTime: '春季（3-5月）和秋季（9-11月）',
        recommendDays: 3-5,
        transportation: '地铁、公交、出租车、共享单车'
      },
      2: {
        id: 2,
        name: '上海',
        description: '中国最大的城市，国际大都市，拥有外滩、东方明珠、迪士尼乐园等著名景点。',
        images: [
          'https://images.unsplash.com/photo-1548437096-47087767129c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        score: 4.7,
        travelers: 1123000,
        tags: ['现代都市', '购物', '美食', '主题乐园'],
        introduction: '<p>上海是中国最大的经济中心和贸易港口，也是国际大都市。</p><p>上海拥有独特的城市风貌，既有现代化的摩天大楼，也有充满历史韵味的老建筑。外滩是上海的标志性景点，可以欣赏到黄浦江两岸的美景。</p><p>陆家嘴金融区集中了上海的标志性建筑，如东方明珠、金茂大厦、环球金融中心等。</p><p>上海还有众多的购物中心、美食街和娱乐场所，如南京路步行街、豫园商城、田子坊等。</p><p>2016年开业的上海迪士尼乐园是中国大陆第一个迪士尼主题乐园，吸引了大量游客。</p>',
        attractions: [
          {
            name: '外滩',
            description: '上海的标志性景点，欣赏黄浦江两岸风光',
            image: 'https://images.unsplash.com/photo-1548437096-47087767129c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '免费'
          },
          {
            name: '东方明珠',
            description: '上海地标性建筑，俯瞰全城美景',
            image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '门票：120元'
          },
          {
            name: '上海迪士尼乐园',
            description: '中国大陆第一个迪士尼主题乐园',
            image: 'https://images.unsplash.com/photo-1548036328-c9fa89d1263f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '门票：399元起'
          }
        ],
        bestTime: '春季（3-5月）和秋季（9-11月）',
        recommendDays: 3-4,
        transportation: '地铁、公交、出租车、网约车'
      },
      // 其他目的地的数据可以继续添加
      3: {
        id: 3,
        name: '成都',
        description: '四川省省会，以美食、休闲生活和大熊猫基地而闻名。',
        images: [
          'https://images.unsplash.com/photo-1582050129314-d9220c6f0960?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        score: 4.9,
        travelers: 987000,
        tags: ['美食', '休闲', '大熊猫', '历史'],
        introduction: '<p>成都是四川省省会，被誉为"天府之国"。</p><p>成都以其悠闲的生活节奏、丰富的美食文化和可爱的大熊猫而闻名于世。</p><p>成都的美食种类繁多，如火锅、串串香、川菜等，让人垂涎欲滴。宽窄巷子、锦里古街等传统街区保存了成都的历史文化风貌。</p><p>成都大熊猫繁育研究基地是世界著名的大熊猫保护机构，游客可以近距离观赏可爱的大熊猫。</p><p>成都还有青城山、都江堰等世界文化遗产，自然风光优美。</p>',
        attractions: [
          {
            name: '成都大熊猫繁育研究基地',
            description: '世界著名的大熊猫保护机构',
            image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '门票：58元'
          },
          {
            name: '宽窄巷子',
            description: '保存完好的清朝古街道',
            image: 'https://images.unsplash.com/photo-1582050129314-d9220c6f0960?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '免费'
          },
          {
            name: '锦里古街',
            description: '成都著名的仿古商业街',
            image: 'https://images.unsplash.com/photo-1587134180570-608a8c765a4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            price: '免费'
          }
        ],
        bestTime: '春季（3-5月）和秋季（9-11月）',
        recommendDays: 2-3,
        transportation: '地铁、公交、出租车、共享单车'
      }
    };

    // 获取对应ID的数据，如果不存在则使用默认数据
    const destination = destinationsDetail[id] || {
      id: id,
      name: '未知目的地',
      description: '暂无详细信息',
      images: [],
      score: 0,
      travelers: 0,
      tags: [],
      introduction: '<p>暂无详细介绍</p>',
      attractions: [],
      bestTime: '全年皆宜',
      recommendDays: 1,
      transportation: '多种交通方式'
    };

    this.setData({
      destination: destination
    });
  },

  /**
   * 切换收藏状态
   */
  toggleFavorite: function() {
    const app = getApp();
    const isCancel = app.toggleFavorite(this.data.destination.id, this.data.destination);
    
    this.setData({
      isFavorited: !isCancel
    });
    
    wx.showToast({
      title: isCancel ? '已取消收藏' : '收藏成功',
      icon: 'success',
      duration: 2000
    });
  },

  /**
   * 查看地图
   */
  openMap: function() {
    wx.openLocation({
      latitude: 39.9042,
      longitude: 116.4074,
      name: this.data.destination.name,
      address: this.data.destination.name,
      scale: 14
    });
  },

  /**
   * 制定计划
   */
  createPlan: function() {
    wx.showToast({
      title: '制定计划功能开发中',
      icon: 'none',
      duration: 2000
    });
  },

  /**
   * 分享功能
   */
  onShareAppMessage: function() {
    return {
      title: `${this.data.destination.name} - 旅行攻略`,
      path: `/pages/detail/detail?id=${this.data.destination.id}`,
      imageUrl: this.data.destination.images && this.data.destination.images.length > 0 ? this.data.destination.images[0] : ''
    };
  }
});