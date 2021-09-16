/*
 * @Author: proyzplus
 * @Date: 2021-09-11 00:19:49
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-11 01:00:58
 * @Description: Description
 */
import axios from 'axios';
import Vue from "vue";

const vue = new Vue();
// import store from '@/store/index.js'
import {
    BASE_URL
} from '@/env/config.js';


// VUE_APP_BASE_URL=https://b.looovo.com/
// VUE_APP_BASE_URL2=https://ss.looovo.com/
// VUE_APP_BASE_URL3=https://payment.looovo.com/
// 创建axios实例
const service = axios.create({
    baseURL: BASE_URL, // api的base_url
    timeout: 10000 // 请求超时时间
});

console.log(BASE_URL, "??????");

// request 请求发送之前 拦截器
service.interceptors.request.use(config => {   
    
    return config;
}, error => {
    // Do something with request error
    console.log(error)
    Promise.reject(error)
})
// 返回拦截器
service.interceptors.response.use(
    async function (response) {
        if(response.data.status == 'Error'){
            vue.$toast(response.data.error_msg);
            return Promise.reject(response.data.msg || response.data.err || response.data.error_msg);
        }
        return response.data
    },
    async function (err) {
        vue.$toast(err);
        return Promise.reject(err);
    },
);



export default service