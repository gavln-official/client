<template>
    <div class="main">
        <div class="login">
            <h2 class="title">欢迎回来</h2>
            <div class="loginForm">
                <el-input placeholder="用户名/邮箱" v-model="userName"></el-input>
                <el-input placeholder="密码" type="password" v-model="password" :show-password="true"></el-input>
                <p class="logonInfo">
                    <span class="forgetPassword">忘记密码?</span>
                    <router-link to="/register" tag="span">去注册</router-link>
                </p>
                <p class="goLogin">
                    <span @click="login">登录账户</span>
                    <i class="el-icon-right"></i>
                </p>
            </div>

        </div>
        <div class="animation"></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      login() {
        // eslint-disable-next-line no-console
        console.log(this.password)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "@/style/mixmin.scss";

    .main {
        width: 600px;
        margin: 20px auto;

        .login {
            width: 260px;
            background: #0D0C12;
            height: 460px;
            padding: 20px;

            .title {
                text-align: center;
                padding-top: 20px;
                padding-bottom: 20px;
                color: #ffffff;
                font-size: 20px;
            }

            .loginForm {
                padding: 0 20px;

                /deep/ .el-input__inner {
                    background: none;
                    border: none;
                    border-bottom: 1px solid #323136;
                    color: #ffffff;
                    border-radius: 0;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    font-size: 12px;

                }

                .goLogin, .logonInfo {
                    color: #ffffff;
                    font-size: 12px;
                    margin-top: 30px;
                    cursor: pointer;
                }

                .logonInfo {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

        .animation {
            width: 300px;
            height: 600px;
        }
    }

</style>