/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let BASE_URL =  process.env.VUE_APP_BASE_URL;   // 请求域名地址
let ROUTER_MODE = "";   // 路由模式
let IMG_BASE_URL = BASE_URL;   // 图片所在域名地址
export { BASE_URL, ROUTER_MODE, IMG_BASE_URL };
