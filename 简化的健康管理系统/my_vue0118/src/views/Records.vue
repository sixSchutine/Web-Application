<template>
    <div class="records">
        <h1>我的数据</h1>
        <img src="../assets/个人记录.png" alt="图标" height="200px" width="200px">
        <br />
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>身高 (cm)</th>
                    <th>体重 (kg)</th>
                    <th>体脂率 (%)</th>
                    <th>腰围 (cm)</th>
                    <th>BMI</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(record, index) in healthData" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ record.height }}</td>
                    <td>{{ record.weight }}</td>
                    <td>{{ record.bodyFat }}</td>
                    <td>{{ record.waist }}</td>
                    <td>{{ record.bmi }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            healthData: []
        };
    },
    created() {
        this.fetchHealthData();
    },
    methods: {
        async fetchHealthData() {
            try {
                const response = await axios.get('http://localhost:3000/getHealthData');
                if (response.status === 200) {
                    this.healthData = response.data;
                    console.log('获取数据成功:', this.healthData);
                } else {
                    console.error('获取数据失败，状态码:', response.status);
                    alert('获取数据失败，请重试。');
                }
            } catch (error) {
                if (error.response) {
                    console.error('服务器响应错误:', error.response.data);
                    alert('服务器响应错误，请重试。');
                } else if (error.request) {
                    console.error('请求未发送:', error.request);
                    alert('请求未发送，请检查网络连接。');
                } else {
                    console.error('未知错误:', error.message);
                    alert('发生未知错误，请重试。');
                }
            }
        }
    }
};
</script>

<style scoped>
/* 添加一些样式 */
.records {
    text-align: center;
}

table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}
</style>