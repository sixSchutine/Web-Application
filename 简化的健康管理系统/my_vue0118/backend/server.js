const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 连接到 MongoDB
mongoose.connect('mongodb://localhost:27017/healthData', {});

// 定义数据模型
const healthDataSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  bodyFat: Number,
  waist: Number,
  bmi: String,
  timestamp: { type: Date, default: Date.now }
});

const HealthData = mongoose.model('HealthData', healthDataSchema);

// 处理 POST 请求
app.post('/saveHealthData', async (req, res) => {
  console.log('Received data:', req.body); // 添加日志
  try {
    const healthData = new HealthData(req.body);
    await healthData.save();
    res.status(200).send('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error saving data');
  }
});

// 处理 GET 请求，获取所有记录
app.get('/getHealthData', async (req, res) => {
  try {
    const healthData = await HealthData.find(); // 查询所有记录
    res.json(healthData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});