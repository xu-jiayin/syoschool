<template>
    <div class="box">
        <span class="name">徐佳银</span>
        <div class="card" v-for="(item, index) in cardList" :key="index">
            <van-card 
            :title="item.title" 
            :thumb="imageURL"
            centered="true"
            :thumb-link="item.path"
            />
        </div>
    </div>
    
    
</template>

<script>
export default {
    name: 'homework',
    data () {
        return {
            imageURL: "https://img01.yzcdn.cn/vant/ipad.jpeg",
            cardList: [
                { title: '第一章', path: '../../static/html/ch01/index.html'},
                { title: '第二章', path: '/'},
                { title: '第三章', path: '/'},
                { title: '第四章', path: '/'},
                { title: '第五章', path: '/'},
                { title: '第六章', path: '/'},
                { title: '第七章', path: '/'},
                { title: '第八章', path: '/'},
                { title: '第九章', path: '/'},
                { title: '第十章', path: '/'},
                { title: '第十一章', path: '/'},
            ]
        }
    }
}
</script>

<style>
    .box {
        margin-bottom: 5rem;
    }

    .name {
        display: block;
        margin: 1rem 0;
        font-size: 2rem;
    }

    .card {
        margin-bottom: 1rem;
    }

    .van-card__title {
        font-size: 1rem;
    }
</style>