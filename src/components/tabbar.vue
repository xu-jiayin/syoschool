<template>
    <div
        v-if="$route.name != 'login'"
    >
        <van-row class="head">
            <van-image
                :src="require('../../static/images/logo.png')"/>
        </van-row>

        <van-tabbar v-model="active" fixed :route="true" active-color="#227590">
            <van-tabbar-item v-for="(item, index) in tabbarList" :key="index" :to="item.path" :icon="item.icon">
                {{ item.title }}
            </van-tabbar-item>
        </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'tabbar',
    data() {
        return {
            tabbarList: [
                { path: '/', title: '首页', name: 'home', icon: 'home-o'},
                { path: '/shopping', title: '购物车', name: 'cart', icon: 'cart-o'},
                { path: '/userinfo', title: '我的', name: 'home', icon: 'home-o'},
            ]
        }
    },
    computed: {
        active: {
            get() {
                return this.$route.meta.tabbarActiveNum
            },
            set() {
                
            }
        }
    }
}    
</script>

<style>
    .head {
        background: #D0E3F1;
    }
</style>