<template>
    <div class="box">
        <van-image
                round
                width="6rem"
                height="6rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <van-form>
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" @click="onSubmit">登录</van-button>
            </div>
            <div class="reg">
                <div @click="toRegister">没有账号？立即注册</div>
            </div>
        </van-form>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onSubmit() {
                /*console.log('submit', values);*/
                if(this.username=="123456"&&this.password=="123456"){
                    Toast.success('登录成功');
                }
                else if(this.username==""&&this.password==""){
                    Toast('请输入账号或密码');
                }
                else{
                    Toast.fail('账号或密码错误');
                }
            },
            toRegister(){
                this.$router.push('/Register')
            }
        }
    }

</script>

<style scoped>
    .title {
        /* border-radius: 15px; */
        size:1px;
        height: 50px;
        line-height: 50px;
        background-color: #20a0ff;
        color: #fff;
        text-align: center;
    }

    .box {
        margin: 20% auto;
    }

</style>

