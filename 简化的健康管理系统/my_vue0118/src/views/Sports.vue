<template>
    <div class="sports">
        <h1>推荐今天的运动</h1>
        <h2>生命在于运动！</h2>
        <img src="../assets/运动.png" alt="图标" height="200px" width="200px">
        <br/>
        <Lottery />
    </div>
</template>

<script>
import Lottery from './Lottery.vue';

export default {
    components: {
        Lottery
    }
};
</script>

<style scoped>
/* 添加一些样式 */
.sports {
    text-align: center;
}

img {
    margin-top: 10px;
}
</style>