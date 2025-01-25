<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">个人中心</router-link> |
      <router-link to="/test">健康商城</router-link> |
      <router-link to="/data">健康数据</router-link> |
      <router-link to="/sports">运动</router-link> |
      <a href="https://machtalk.xiachufang.com/" target="_blank" rel="noopener">饮食</a> |
      <a href="https://dxy.com" target="_blank" rel="noopener">健康科普</a> 
 
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  background-color: rgb(197, 241, 220);
  margin: 0;
  overflow: hidden;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
