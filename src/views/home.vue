<template>
    <div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in imges" :key="item" @click="$router.push('/homework')">
                <van-image :src="item"/>
            </van-swipe-item>
        </van-swipe>

        <div style="margin-top: 22px">开放课程</div>
        <van-row>
            <van-col span="24">
                <!-- <div class="item" style="margin-right: 0px">
                    <span>VUE.JS前端开发</span>
                </div> -->
                <van-button type="primary" @click="$router.push('/homework')" color="#227590" class="item-btn">VUE.JS前端开发</van-button>
            </van-col>
        </van-row>

        <span>推荐课程</span>
        <van-row gutter="5">
            <van-col span="6">
                <!-- <div class="item">
                    <span>HTML</span>
                </div> -->
                <van-button type="primary" @click="$router.push('/homework')" color="#227590" class="item-btn">HTML</van-button>
            </van-col>
            <van-col span="6">
                <!-- <div class="item">
                    <span>CSS</span>
                </div> -->
                <van-button type="primary" @click="$router.push('/homework')" color="#227590" class="item-btn">CSS</van-button>
            </van-col>
            <van-col span="6">
                <!-- <div class="item">
                    <span>JS</span>
                </div> -->
                <van-button type="primary" @click="$router.push('/homework')" color="#227590" class="item-btn">JS</van-button>
            </van-col>
            <van-col span="6">
                <!-- <div class="item" style="margin-right: 0px">
                    <span>Linux</span>
                </div> -->
                <van-button type="primary" @click="$router.push('/homework')" color="#227590" class="item-btn">Linux</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            imges: [
                require("@/assets/images/js.jpg"),             
                require("@/assets/images/html.png"),             
                require("@/assets/images/css.jpg"),             
                require("@/assets/images/linux.png"),             
            ],
        }
    },
};
</script>

<style>
    .item-btn {
        width: 100%;
        margin: 22px 0;
    }

    .item {
        background: white;
        margin: 22px 15px 22px 0;
        padding: 20px;
        /* border: 1px rgb(216, 216, 216) solid; */
        box-shadow: 0 0 30px rgb(216, 216, 216);
    }
</style>