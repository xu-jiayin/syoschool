<template>
    <div class="box">
        <van-search
            v-model="value"
            shape="round"
            background="#D0E3F1"
            placeholder="请输入搜索关键词"
        />
        <table class="tableList">
           <tr>
               <th>班级</th>
               <th>学号</th>
               <th>姓名</th>
               <th>出生年月</th>
               <th>兴趣爱好</th>
               <th>学习内容</th>
               <th>
                    <van-button type="primary" color="#227590" class="item-btn" size="mini">增加</van-button>

               </th>
           </tr>
           <tr v-for="(item, index) in infoList" :key="index">
               <td>{{ item.classAndGRade }}</td>
               <td>{{ item.userId }}</td>
               <td>{{ item.name }}</td>
               <td>{{ item.dateOfBirth }}</td>
               <td>{{ item.interestIn }}</td>
               <td>{{ item.content }}</td>
               <td>
                   <van-button type="primary" color="#227590" class="item-btn" size="mini">删除</van-button>
                   </td>
               <td>
                   <van-button type="primary" color="#227590" class="item-btn" size="mini">修改</van-button>
                   </td>
           </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infoList: [
                {classAndGRade: '2032', userId: '132', name: 'xjy', dateOfBirth: '0528', interestIn: 'sad', content: 'sds'},
                {classAndGRade: '2032', userId: '132', name: 'xjy', dateOfBirth: '0528', interestIn: 'sad', content: 'sds'},
                {classAndGRade: '2032', userId: '132', name: 'xjy', dateOfBirth: '0528', interestIn: 'sad', content: 'sds'},
                {classAndGRade: '2032', userId: '132', name: 'xjy', dateOfBirth: '0528', interestIn: 'sad', content: 'sds'},
            ]
        }
    }
}
</script>
    
<style>
    .tableList {
        margin: 0 auto;
    }
</style>