import reqwest from 'reqwest';  // 封装了ajax请求的库
import axios from 'axios';      // 封装了fetch请求的库

import Mock from 'mockjs';      // 数据模拟的库（真实开发时需删掉）
import { ajaxTest } from '../util/mock-data.js';  // 自己定义的mock模拟数据模版（真实开发时需删掉）

Mock.mock(/\.ajax/, ajaxTest);  // 拦截url中带.ajax的异步请求，返回模拟数据（真实开发时需删掉）

export default class ApiService {
  // ajax请求
  static newPost(url, bodyObj = {}) {
    return reqwest({
      url,                              // URL
      method: 'post',                   // 请求方式
      contentType: 'application/json;charset=utf-8',  // 消息主体数据类型 JSON
      crossOrigin: true,                // 开启CORS跨域
      withCredentials: true,            // 请求头中是否带cookie，有利于后端开发保持他们需要的session
      data: JSON.stringify(bodyObj),    // 参数，弄成json字符串
      type: 'json',                     // 参数类型JSON
    });
  }

  // fetch请求
  static newFetch(url, bodyObj = {}) {
    return axios({
      url,
      method: 'post',
      headers:{
        'Content-Type':'application/json;charset=utf-8'
      },
      withCredentials: true,
      data: JSON.stringify(bodyObj)
    });
  }
}
