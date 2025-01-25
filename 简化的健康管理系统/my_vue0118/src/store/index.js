import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const state = {
  products: [
    { name: '运动鞋', image: require('../assets/运动鞋.png'), isLiked: false },
    { name: '运动袜', image: require('../assets/运动袜.png'), isLiked: false },
    { name: '运动内衣', image: require('../assets/运动内衣.png'), isLiked: false },
    { name: '动感单车', image: require('../assets/动感单车.png'), isLiked: false },
    { name: '壶铃', image: require('../assets/壶铃.png'), isLiked: false },
    { name: '运动服', image: require('../assets/运动服.png'), isLiked: false },
    { name: '运动帽', image: require('../assets/运动帽.png'), isLiked: false },
    { name: '哑铃', image: require('../assets/哑铃.png'), isLiked: false },
    { name: '血压计', image: require('../assets/血压计.png'), isLiked: false },
    { name: '血糖仪', image: require('../assets/血糖仪.png'), isLiked: false },
    { name: '护膝', image: require('../assets/护膝.png'), isLiked: false },
    { name: '手套', image: require('../assets/手套.png'), isLiked: false },
    { name: '体温计', image: require('../assets/体温计.png'), isLiked: false },
    { name: '智能手表', image: require('../assets/智能手表.png'), isLiked: false },
    { name: '智能手环', image: require('../assets/智能手环.png'), isLiked: false },
    { name: '背包', image: require('../assets/背包.png'), isLiked: false },
    { name: '跑步机', image: require('../assets/跑步机.png'), isLiked: false },
    { name: '水杯', image: require('../assets/水杯.png'), isLiked: false },
    { name: '体重秤', image: require('../assets/体重秤.png'), isLiked: false }
  ],
  liked: []   // 收藏的商品
};

const getters = {
  products: (state) => state.products,
  Like: (state) => state.liked
};

const mutations = {
  toggleLike(state, index) {
    const product = { ...state.products[index] }; // 使用深拷贝
    const likedIndex = state.liked.findIndex(p => p.name === product.name);

    if (likedIndex !== -1) {
      state.liked.splice(likedIndex, 1);
      product.isLiked = false;
    } else {
      state.liked.push(product);
      product.isLiked = true;
    }

    Vue.set(state.products, index, product); // 确保 Vue 能够检测到变化
  }
};

const actions = {
  toggleLike({ commit }, index) {
    commit('toggleLike', index);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()] // 添加持久化插件
});