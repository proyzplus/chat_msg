/*
 * @Author: proyzplus
 * @Date: 2021-09-10 19:46:50
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-11 00:28:43
 * @Description: Description
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from '@/api/index.js';
import Vant from 'vant'; 

import 'vant/lib/index.css';
import * as filters from '@/utils/filters/index.js'; 



// 注册全局过滤器 , 直接可以在页面上使用里面的函数传值即可
// 该文件需要扩展在filters文件夹里面添加函数即可
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.prototype.$api = api;
Vue.use(Vant);  
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
