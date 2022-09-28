<template>
  <div class="login-container">
    <el-form ref="loginForm" :rules="loginRules" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
      <!-- 账号 -->
      <el-form-item prop="loginName">
        <span class="svg-container">
          <i class="el-icon-mobile" />
        </span>
        <el-input
          v-model="loginForm.loginName"
          placeholder="请输入账号"
        />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock" />
        </span>
        <el-input
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
        />
        <span class="svg-container" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="code">
        <span class="svg-container">
          <i class="el-icon-lock" />
        </span>
        <el-input v-model="loginForm.code" style="width: 268px;" placeholder="请输入验证码" />
        <img class="code-img" style="">
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;background:#6579ed">登录</el-button>
    </el-form>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      passwordType: 'password',
      loginRules: {
        loginName: [{ required: true, trigger: 'blur', message: '账号必填' }],
        password: [
          { required: true, message: '密码必填', trigger: 'blur' },
          { min: 5, max: 16, message: '密码格式错误', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    showPwd() {
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background-image: url('~@/assets/common/background.png'); // 设置背景图片
  background-position: center; // 将图片位置设置为充满整个屏幕
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #acb1b8;
      height: 47px;
      caret-color: #9999b3;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    // background: rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e2e2;
    background: $cursor;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    width: 520px;
    height: 388px;
    max-width: 100%;
    // margin: 0 auto;
    // overflow: hidden;
    padding: 76px 35px 0;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }

  // .tips {
  //   font-size: 14px;
  //   color: #fff;
  //   margin-bottom: 10px;

  //   span {
  //     &:first-of-type {
  //       margin-right: 16px;
  //     }
  //   }
  // }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  // .title-container {
  //   position: relative;

  //   .title {
  //     font-size: 26px;
  //     color: $light_gray;
  //     margin: 0px auto 40px auto;
  //     text-align: center;
  //     font-weight: bold;
  //   }
  // }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
