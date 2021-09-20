<!--
 * @Author: proyzplus
 * @Date: 2021-09-10 19:46:50
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-20 18:05:31
 * @Description: Description
-->
<template>
  <div id="app">
    <div class="main-page">
      <meet v-show="active==0"></meet>
    </div>
    <div class="main-footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">遇见</van-tabbar-item>
        <van-tabbar-item icon="search" dot>讯息</van-tabbar-item>
        <van-tabbar-item icon="friends-o" badge="5">动态</van-tabbar-item>
        <van-tabbar-item icon="setting-o" badge="20">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script> 
import meet from "../meet/index.vue"
export default {
  components: {
    meet
  },
  data() {
    return {
      active: 0,
    }
  },
  created() {
    
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
