<template>
  <div class="main">
    <div class="head">
      <router-link to="/introduce" tag="span">{{$t('introduce')}}</router-link>
      <span>ZH/EN</span>
      <router-link to="/register" tag="span">{{$t('regist')}}</router-link>
    </div>
    <div class="body">
      <div class="login"
           v-loading="loading"
           element-loading-text="登录中,请稍等！"
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <h2 class="title">{{$t('welcomeBack')}}</h2>
        <div class="loginForm">
          <el-input :placeholder="$t('userNameOrEmail')" v-model="userName"></el-input>
          <el-input :placeholder="$t('password')" type="password" v-model="password" :show-password="true"></el-input>
          <p class="goLogin">
            <span @click="login">{{$t('signIn')}}</span>
            <i class="el-icon-right"></i>
          </p>
          <p class="logonInfo">
            <span class="forgetPassword">{{$t('forgotPassword')}}</span>
            <router-link to="/register" tag="span">{{$t('signUp')}}</router-link>
          </p>

        </div>
      </div>
      <div class="animation"></div>
    </div>

    <div class="foot">
      <router-link to="/service" tag="span">{{$t('service')}}</router-link>
      <router-link to="/privacy" tag="span">{{$t('privacy')}}</router-link>
    </div>
  </div>
</template>

<script>
	import {mapState} from 'vuex'
	import loginAPi from '@/api/login'
	import router from '../../router'

	export default {
		data() {
			return {
				userName: '',
				password: ''
			}
		},
		computed: {
			...mapState({
				loading: 'loading'
			})
		},
		methods: {
			login() {
				// eslint-disable-next-line no-console
				loginAPi
					.login({
						name: this.userName,
						pass: this.password
					})
					.then(res => {
						this.$cookies.set('access_token', res.data.AccessToken) //后续登录token
						this.$cookies.set('refresh_token', res.data.RefreshToken) //使用刷新token
						this.$message.success('登录成功'|| res.msg)
						router.push('/')
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import "@/style/mixmin.scss";

  .main {
    width: 1200px;
    margin: 40px auto;

    .head {
      display: inline;
      margin: 30px 0 20px 780px;

      span {
        margin: 15px;
        cursor: pointer;
      }
    }

    .body {
      display: flex;
      margin: 130px 0 0 320px;
      height: 460px;

      .login {
        width: 300px;
        background: #0d0c12;

        .title {
          text-align: center;
          padding-top: 60px;
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

          .goLogin {
            text-align: right;
          }

          .goLogin,
          .logonInfo {
            color: #ffffff;
            font-size: 12px;
            margin-top: 40px;
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
        background: #3d3838;
        font-size: 20px;
      }
    }

    .foot {
      display: block;
      margin: 100px 0 0 540px;

      span {
        margin: 10px;
        cursor: pointer;
      }
    }
  }
</style>