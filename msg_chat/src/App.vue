<!--
 * @Author: proyzplus
 * @Date: 2021-09-10 19:46:50
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-20 19:17:14
 * @Description: Description
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>  
export default {
  data() {
    return {}
  },
  created() {
    const isLogin = sessionStorage.getItem("isLogin");
    if (isLogin) {
      this.$router.push({ name: 'Home' });
    } else {
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  .main-page {
    width: 100%;
    height: calc(100% - 60px);
  }
  .main-footer {
    width: 100%;
    height: 60px;
  }
}
</style>
