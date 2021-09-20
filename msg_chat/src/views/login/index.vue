<!--
 * @Author: proyzplus
 * @Date: 2021-09-20 18:00:25
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-20 19:17:43
 * @Description: Description
-->
<template>
  <div class="login-html">
    <div class="form-box">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="user" label="账号：" placeholder="请输入账号" :rules="[{ required: true, message: '请填写账号' }]" />
        <br />
        <van-field v-model="password" type="password" name="pass" label="密码：" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import login from '../../api/login/index';
import { Notify } from 'vant';
export default {
  components: {
    [Notify.Component.name]: Notify.Component,
  },
  data: () => ({
    username: '',
    password: '',
  }),
  created() { },
  methods: {
    onSubmit(values) {
      login.loginUser(values).then(res => {
        if (res.data.ec == 200) {
          Notify({ type: 'success', message: '欢迎回家！' });
          sessionStorage.setItem("isLogin", true);
          sessionStorage.setItem("UserInfo", JSON.stringify(res.data.body));
          this.$router.push({ name: 'Home' });
        } else {
          Notify({ type: 'danger', message: '登陆失败！' });
        }
      })
    },
  }
}
</script>
<style lang='scss' scoped>
.login-html {
  width: 100%;
  height: 100vh;
  background-image: url("./img/back.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .form-box {
    width: 90%;
    margin: auto;
    padding-top: 50%;
  }
}
</style>
