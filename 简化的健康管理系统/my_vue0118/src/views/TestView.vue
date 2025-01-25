<!-- TestView.vue -->
<template>
  <div class="test">
    <h1>欢迎来到健康商城</h1>
    <img src="../assets/健康商城.png" height="200px" width="200px">
    <br/>
    <div class="product-list">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image" alt="商品图片" class="product-image" />
        <h2>{{ product.name }}</h2>
        <div class="buttons">
          <button @click="toggleLike(index)" :class="{ active: product.isLiked }">
            {{ product.isLiked ? '取消收藏' : '收藏' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      selectedProduct: null,
      quantity: 1
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    likedProducts() {
      return this.$store.getters.Like;
    }
  },
  methods: {
    toggleLike(index) {
      this.$store.dispatch('toggleLike', index);
    }
  }
};
</script>

<style scoped>
.test {
  text-align: center;
  margin: 20px;
  overflow-y: auto;
  max-height: 80vh;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  flex-grow: 1;
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

.buttons {
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s;
}

button.active {
  background-color: #ccc;
}

button:hover:not(.active) {
  background-color: #45a049;
}
</style>