<template>
    <div class="lottery">
        <div class="grid">
            <div 
                v-for="(item, index) in items" 
                :key="index" 
                class="grid-item"
                :class="{ active: activeIndex === index }"
            >
                <img :src="getIcon(item)" alt="运动图标" class="icon" />
                <span>{{ item }}</span>
            </div>
        </div>
        <button @click="startLottery" :disabled="isRunning">开始抽奖</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: ['羽毛球', '乒乓球', '篮球', '跑步', '跳绳'],
            activeIndex: 0,
            isRunning: false,
            intervalId: null
        };
    },
    methods: {
        startLottery() {
            if (this.isRunning) return;
            this.isRunning = true;
            let count = 0;
            this.intervalId = setInterval(() => {
                count++;
                this.activeIndex = (this.activeIndex + 1) % this.items.length;
                if (count > 20) { // 控制闪烁次数
                    clearInterval(this.intervalId);
                    this.isRunning = false;
                    alert(`你选择了: ${this.items[this.activeIndex]}`);
                }
            }, 100); // 控制闪烁速度
        },
        getIcon(item) {
            switch (item) {
                case '羽毛球':
                    return require('../assets/羽毛球.png');
                case '乒乓球':
                    return require('../assets/乒乓球.png');
                case '篮球':
                    return require('../assets/篮球.png');
                case '跑步':
                    return require('../assets/跑步.png');
                case '跳绳':
                    return require('../assets/跳绳.png');
                default:
                    return '';
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    }
};
</script>

<style scoped>
.lottery {
    text-align: center;
    margin: 20px;
}

.grid {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.grid-item {
    width: 100px;
    height: 100px;
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: background-color 0.3s;
}

.grid-item.active {
    background-color: #4CAF50;
    color: white;
}

.icon {
    width: 40px;
    height: 40px;
    margin-bottom: 5px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #45a049;
}
</style>