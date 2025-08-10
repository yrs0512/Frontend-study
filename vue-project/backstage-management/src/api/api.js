/**
 * 整个项目 api 的统一管理
 * 通过调用 $api 使用
 * 
 * api 调用 request(参考config，配置url)
 * mock 拦截 url，返回mockData
 * 返回的数据为样例 
 */
import request from "./request";

export default {
  getTableData() {
    // Axios 会自动将 baseURL 和 url 拼接成完整请求地址
    return request({
      url: "/home/getTableData",
      method: "get",
    });
  },
  getCountData() {
    return request({
      url: "/home/getCountData",
      method: "get",
    });
  },  
  getChartData() {
    return request({
      url: "/home/getChartData",
      method: "get",
    });
  },    
  getUserData(data) {
    return request({
      url: "/home/getUserData",
      method: "get",
      data,
    });
  },  
  deleteUser(data) {
    return request({
      url: "/user/deleteUser",
      method: "get",
      data,
    });
  },  
  addUser(data) {
    return request({
      url: "/user/addUser",
      method: "post",
      data,
    });
  },  
  editUser(data) {
    return request({
      url: "/user/editUser",
      method: "post",
      data,
    });
  },  
};
