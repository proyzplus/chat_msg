/*
 * @Author: proyzplus
 * @Date: 2021-09-10 19:46:50
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-10 20:02:21
 * @Description: Description
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/main/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
