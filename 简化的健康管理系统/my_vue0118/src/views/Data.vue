<template>
  <div class="data">
    <h1>输入我的健康数据</h1>
    <img src="../assets/健康数据.png" height="200px" width="200px">
    <br>
    <form @submit.prevent="submitData">
      <div>
        <label for="height">身高 (cm):</label>
        <input type="number" id="height" v-model="formData.height" required>
      </div>
      <div>
        <label for="weight">体重 (kg):</label>
        <input type="number" id="weight" v-model="formData.weight" required>
      </div>
      <div>
        <label for="bodyFat">体脂率 (%):</label>
        <input type="number" id="bodyFat" v-model="formData.bodyFat" required>
      </div>
      <div>
        <label for="waist">腰围 (cm):</label>
        <input type="number" id="waist" v-model="formData.waist" required>
      </div>
      <div>
        <label>BMI: {{ bmi }}</label> <!-- 确保这里正确绑定到 bmi -->
      </div>
      <button type="submit">保存数据</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        height: '',
        weight: '',
        bodyFat: '',
        waist: ''
      },
      bmi: '' // 确保 bmi 初始化为空字符串
    };
  },
  methods: {
    calculateBMI(weight, height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      console.log('Calculated BMI:', bmi); // 添加日志
      return bmi;
    },
    async submitData() {
      this.bmi = this.calculateBMI(this.formData.weight, this.formData.height);
      console.log('Updated BMI in data:', this.bmi); // 添加日志
      try {
        await axios.post('http://localhost:3000/saveHealthData', {
          ...this.formData,
          bmi: this.bmi
        });
        alert('数据保存成功！');
        // 清空表单
        this.formData = {
          height: '',
          weight: '',
          bodyFat: '',
          waist: ''
        };
        this.bmi = ''; // 清空 bmi
      } catch (error) {
        console.error('保存数据失败:', error);
        alert('保存数据失败，请重试。');
      }
    }
  }
};
</script>

<style scoped>
/* 添加一些样式 */
.data {
  text-align: center;
  overflow-y: auto; /* 添加此行 */
  max-height: 100vh; /* 可选：限制最大高度为视口高度 */
}

form {
  display: inline-block;
  text-align: left;
}

div {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>