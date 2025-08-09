import Mock from 'mockjs'
// homeApi 是从 ./mockData/home 导入的模拟数据对象，
// 通常包含 getTableData 方法或属性，用于返回模拟的表格数据
import homeApi from "./mockData/home"
import userApi from "./mockData/user"
// 1. 拦截的路径 2. 方法 3. 制造出的假数据
// /api\/home\/getTableData/ 这是一个正则表达式，匹配请求的 URL
// 正则表达式由 / 开始和结束，表示模式的边界，里面要转义
Mock.mock(/api\/home\/getTableData/, "get", homeApi.getTableData);
Mock.mock(/api\/home\/getCountData/, "get", homeApi.getCountData);
Mock.mock(/api\/home\/getChartData/, "get", homeApi.getChartData);
Mock.mock(/api\/home\/getUserData/, "get", userApi.getUserList);
Mock.mock(/api\/user\/deleteUser/, "get", userApi.deleteUser);
Mock.mock(/api\/user\/addUser/, "post", userApi.createUser);