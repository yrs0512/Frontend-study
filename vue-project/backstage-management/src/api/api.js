/**
 * 整个项目 api 的统一管理
 */
import request from "./request";

// 请求首页左侧的表格的数据

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
};
