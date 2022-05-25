<template>
    <div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="classAndGRade"
                name="班级"
                label="班级"
                placeholder="班级"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="userId"
                name="学号"
                label="学号"
                placeholder="学号"
                :rules="[{ required: true, message: '请填写学号' }]"
            />
            <van-field
                v-model="name"
                name="姓名"
                label="姓名"
                placeholder="姓名"
                :rules="[{ required: true, message: '请填写姓名' }]"
            />
            <van-field
                v-model="dateOfBirth"
                name="出生日期"
                label="出生日期"
                placeholder="出生日期"
                :rules="[{ required: true, message: '请填写出生日期' }]"
                @click="showBeginDate"
            />
            <!-- 弹出日期选择器 -->
            <van-popup v-model="showPickerDate" position="bottom">
                <van-datetime-picker 
                v-model="currentDate" 
                type="date" 
                @cancel="onCancelDate" 
                @confirm="onConfirmDate" 
                :min-date="minDate" 
                :max-date="maxDate" 
                :formatter="formatter" />
            </van-popup>            
            <van-field
                v-model="interestIn"
                name="兴趣爱好"
                label="兴趣爱好"
                placeholder="兴趣爱好"
                :rules="[{ required: true, message: '请填写兴趣爱好' }]"
            />
            <van-field
                v-model="content"
                name="想学习的内容"
                label="想学习的内容"
                placeholder="想学习的内容"
                :rules="[{ required: true, message: '请填写想学习的内容' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="primary" @click="$router.push('/userlist')">管理</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    name: 'userinfo',
    data() {
        return {
            
            classAndGRade:'',
            userId:'',
            name:'',
            dateOfBirth: '',
            interestIn:'',
            content:'',
            showPickerDate: false,
            minDate: new Date(1999, 0, 1),
            maxDate: new Date(2030, 10, 1),
            currentDate: new Date(),
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        // 日期格式化
        formatter (type, value) {
            if (type === 'year') {
                this.value1 = value
                return `${value}年`
            } else if (type === 'month') {
                this.value2 = value
                return `${value}月`
            }
                this.value3 = value
                return `${value}日`
        },
        // 日期选择器取消按钮
        onCancelDate() {
            this.showPickerDate = false
        },
        // 日期选择器确定按钮
        onConfirmDate () {
            this.dateOfBirth = `${this.value1}-${this.value2}-${this.value3}`
            this.onCancelDate()
        },
        // 出生日期
        showBeginDate() {
            this.showPickerDate = true
        }
    }
}
</script>