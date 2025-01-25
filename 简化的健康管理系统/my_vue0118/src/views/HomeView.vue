<template>
  <div class="home">
    <canvas id="snow"></canvas>
    <img alt="Vue logo" src="../assets/logo.jpg" width="300" height="300">
    <h1>给生命以健康，给文明以岁月。</h1>
    <HelloWorld msg="欢迎来到健康管理系统！"/>
    <h1>又是闪闪发光的一天呢！</h1>
    <MyCom msg="CopyRight@LiuShuting2025"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import MyCom from '@/components/MyCom.vue';
import Snowfall from '@/components/Snowfall.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MyCom,
    Snowfall
  },
  mounted() {
    this.initSnowfall();
  },
  methods: {
    initSnowfall() {
      const canvas = document.getElementById('snow');
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Snowflake {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 3 + 2; // 雪花大小
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 1 + 0.5;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.y > canvas.height + 5) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
          }
        }

        draw() {
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const snowflakes = [];
      for (let i = 0; i < 200; i++) {
        snowflakes.push(new Snowflake(Math.random() * canvas.width, Math.random() * canvas.height));
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach(flake => {
          flake.update();
          flake.draw();
        });
        requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
  }
};
</script>

<style>
  h1 {
    color: #42b983; 
  }
  body{
    
    background-color:rgb(197, 241, 220);  
  } 
  html {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>