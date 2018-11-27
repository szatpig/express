/**
 * Created by szatpig on 2017/9/27.
 */

import axios from 'axios'
import store from '@/vuex/store'
import { stringify } from 'qs'
import router from "../router";

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        //if (store.state.user.userToken) {
        //  config.headers.authorization = store.state.user.userToken;
        //}
        //Object.assign(config.params,JSON.parse(sessionStorage.getItem('params')));
        /*getUserAuth(false).then(data => {
             if(data){
                 Object.assign(config.params, {'authuser': data.authuser,'ticket':data.ticket });
             }
             alert('params:'+JSON.stringify(config.params));
         }).catch(err =>{
             return Promise.reject(err);
         });*/
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    //store.commit(types.LOGOUT);
                    break;
                case 403:
                    break;
                case 504:
                    break;
                case 500:
                    //store.dispatch(types.AJAX_ERROR,500);
                    //Toast({
                    //    message: '网络超时，请刷新重试'
                    //});
                    break;
                case 404:
                    //store.dispatch(types.AJAX_ERROR,404);
                    //Toast({
                    //   message: '网页丢失，请刷新重试'
                    //});
                    break;
                default:
                    //Toast({
                    //    message: '程序员罢工了,哄哄她去'
                    //});
            }
        }
        return Promise.reject(error.response)
    }
);

// 封装请求
export function fetch (url, options) {
  let opt = options || {}
  return new Promise((resolve, reject) => {
      axios({
          method: opt.type || 'post',
          url: url,
          params: opt.params || {},
          // 判断是否有自定义头部，以对参数进行序列化。不定义头部，默认对参数序列化为查询字符串。

          data: (opt.headers && opt.headers['Content-Type'].indexOf('x-www-form-urlencoded') > 0 ? stringify(opt.data) : opt.data ) || {},
          responseType: opt.dataType || 'json',
          // 设置默认请求头
          headers: opt.headers || {'Content-Type': 'application/json; charset=UTF-8'},
          //设置超时时间
          timeout: opt.timeout || 30000
      }).then(response => {
          if (response.data.code === 1 || response.data.success == true) {
            resolve(response.data)
          } else {
              switch (response.data.code) {
                  case 0:
                      router.replace({
                          path: '/login',
                          query: {redirect: router.currentRoute.fullPath}
                      });
                      break;
                  default:
                      reject(response.data);
              }
          }
      }).catch(error => {
          reject(error)
      })
  })
}

export default axios;
