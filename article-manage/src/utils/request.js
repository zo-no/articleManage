/*
@Date		:2023/10/31 16:52:49
@Author		:zono
@Description:请求函数封装文件
1、域名配置
2、超时时间
3.请求拦截器
*/

import router from "@/router";
import axios from "axios";
import {removeToken} from "@/utils/token";

const request = axios.create({
    baseURL:'http://localhost:5000/api/v1',//根域名
    // baseURL: 'http://geek.itheima.net/v1_0',
    timeout:5000
})

//请求拦截器
//请求前，进行拦截，对参数处理
request.interceptors.request.use((config)=>{
    //2xx范围的响应都会触发
    return config
},(error)=>{
    return Promise.reject(error)
})

// 响应拦截器
// 在响应返回客户端之前拦截处理
// request.interceptors.response.use((response) => {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     return response.data
//   }, (error) => {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     // 监控401 token失效
//     console.dir(error)
//     if (error.response.status === 401) {
//       removeToken()
//       router.navigate('/login')
//       window.location.reload()
//     }
//     return Promise.reject(error)
//   })

export { 
    request
 }