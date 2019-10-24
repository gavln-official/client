<template>
  <div class="main">
    <div class="login">
      <h2 class="title">{{$t('welcomeJoin')}}</h2>
      <div class="loginForm">
        <el-form :model="registerForm" ref="registerForm" class="demo-dynamic" :rules="rules">
          <el-form-item prop="userName">
            <el-input :placeholder="$t('userName')" type="text" v-model="registerForm.userName" />
          </el-form-item>
          <el-form-item prop="email">
            <el-input :placeholder="$t('email')" type="text" v-model="registerForm.email" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :placeholder="$t('password')"
              type="password"
              v-model="registerForm.password"
              :show-password="true"
            />
          </el-form-item>
        </el-form>
        <p class="logonInfo">
          <router-link to="/login" tag="span">{{$t('signIn')}}</router-link>
        </p>
        <p class="goLogin">
          <span>{{$t('signUp')}}</span>
          <i class="el-icon-right"></i>
        </p>
      </div>
    </div>
    <div class="animation"></div>
  </div>
</template>

<script>
import regApi from "@/api/register";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
      if (value === "") {
        callback(new Error(this.$t("enterPassword")));
      } else if (reg.test(value)) {
        callback(regApi.register(this.registerForm));
      } else {
        callback(new Error(this.$t("passwordFormatInvalid")));
      }
    };
    return {
      registerForm: {
        userName: "",
        email: "",
        password: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        email: [
          {
            required: true,
            message: this.$t("enterEmailAddress"),
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("enterCorrectEmailAddress"),
            trigger: ["blur", "change"]
          }
        ],
        userName: [
          { required: true, message: this.$t("enterUserName"), trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid)
          this.$message({ message: this.$t("successLogin"), type: "success" });
        return false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/mixmin.scss";

.main {
  width: 600px;
  margin: 20px auto;

  .login {
    width: 260px;
    background: #0d0c12;
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

      .goLogin,
      .logonInfo {
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