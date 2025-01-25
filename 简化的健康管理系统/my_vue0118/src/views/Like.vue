<!-- Like.vue -->
<template>
  <div class="like">
    <h1>我的收藏</h1>
    <img src="../assets/收藏.png" alt="图标" height="200px" width="200px">
    <br/>
    <div class="product-list">
      <div v-for="(product, index) in likedProducts" :key="index" class="product">
        <img :src="product.image" alt="商品图片" class="product-image" />
        <h2>{{ product.name }}</h2>
        <button @click="toggleLike(index)" class="unlike-button">
          取消收藏
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    likedProducts() {
      return this.$store.getters.Like;
    }
  },
  methods: {
    toggleLike(index) {
      const product = this.likedProducts[index];
      const productIndex = this.$store.state.products.findIndex(p => p.name === product.name);
      if (productIndex !== -1) {
        this.$store.dispatch('toggleLike', productIndex);
      }
    }
  }
};
</script>

<style scoped>
.like {
  text-align: center;
  margin: 20px;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
  text-align: center;
  transition: box-shadow 0.3s;
}

.product:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.unlike-button {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.unlike-button:hover {
  background-color: #d32f2f;
}
</style>