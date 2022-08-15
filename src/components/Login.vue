<template>
    <body id="poster">
        <el-form class="login-container" lable-position="left" label-wdith="0px">
            <h3 class="login-title">系统登录</h3>
            <el-form-item>
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item width="100%">
                <el-button type="primary" style="width: 100%;background-color: #505458;border: none;" v-on:click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </body>
</template>

<script>
/* eslint-disable */
export default{
  name: 'login',
  data(){
    return{
        loginForm:{
            username:'admin',
            password:'123'
        },
        responseResult:[]
    }
  },
  methods:{
    login(){
        this.$axios.post('/login',{
            username: this.loginForm.username,
            password: this.loginForm.password
        })
        .then(successResponse => {
            console.log(successResponse)
            if(successResponse.data.code === 200){
                this.$store.commit('login', this.loginForm)
                console.log(this.loginForm)
                var path = this.$route.query.redirect
                this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
            }
        })
        .catch(failResponse => {})
    }
  }
}
</script>

<style>
.login-container {
    border: solid 1px #eaeaea;
    border-radius: 15px;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #ffffff;
    box-shadow: 0 0 25px #eaeaea;
}

.login-title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}

#poster {
    background: url("../assets/background.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}
#app {
    margin:0px;
}
body {
    margin:0px;
}
</style>