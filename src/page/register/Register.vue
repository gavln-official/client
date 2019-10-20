<template>
    <div class="main">
        <div class="login">
            <h2 class="title">欢迎加入</h2>
            <div class="loginForm">
                <el-form :model="registerForm" ref="registerForm" class="demo-dynamic" :rules="rules">
                    <el-form-item prop="userName">
                        <el-input placeholder="用户名" type="text" v-model="registerForm.userName"/>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input placeholder="邮箱" type="text" v-model="registerForm.email"/>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input placeholder="密码"
                                  type="password"
                                  v-model="registerForm.password"
                                  :show-password="true"/>
                    </el-form-item>
                </el-form>
                <p class="logonInfo">
                    <!--                    <span class="forgetPassword">忘记密码?</span>-->
                    <span @click="login('registerForm')">登录</span>
                </p>
                <p class="goLogin">
                    <span>创建账户</span>
                    <i class="el-icon-right"></i>
                </p>
            </div>

        </div>
        <div class="animation"></div>
    </div>
</template>

<script>
  import regApi from '@/api/register'
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (reg.test(value)) {
          callback(regApi.register(this.registerForm))
        } else {
          callback(new Error('密码输入格式不对'))
        }

      }
      return {
        registerForm: {
          userName: '',
          email: '',
          password: ''
        },
        rules: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) this.$message({message: '登录成功', type: 'success'})
          return false
        })
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

                /deep/ .el-form-item {
                    margin-bottom: 10px;
                }

                .goLogin, .logonInfo {
                    color: #ffffff;
                    font-size: 12px;
                    margin-top: 30px;
                    cursor: pointer;
                }

                .logonInfo {
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }

        .animation {
            width: 300px;
            height: 600px;
        }
    }

</style>