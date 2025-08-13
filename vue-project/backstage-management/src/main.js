// 导入依赖
import { createApp } from "vue"; // 从Vue导入创建应用的函数
import ElementPlus from "element-plus"; // 导入Element Plus组件库
import "element-plus/dist/index.css"; // 导入Element Plus的样式文件
import App from "./App.vue"; // 导入根组件
import "@/assets/less/index.less"; // 导入自定义的LESS样式文件
import router from "./router"; // 导入路由配置
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 导入Element Plus的所有图标组件
import { createPinia } from "pinia"; // 导入状态管理库Pinia的创建函数
import "@/api/mock.js"; // 导入Mock数据（用于模拟API请求）
import api from "@/api/api"; // 导入自定义的API模块
import { useAllDataStore } from "@/stores"; // 导入自定义的Pinia Store

function isRoute(to) {
  return router.getRoutes().filter((item) => item.path === to.path).length > 0;
}

// 初始化应用
router.beforeEach((to, from) => {
  if (to.path !== "/login" && !store.state.token) {
    return { name: "login" };
  }
  if(!isRoute(to)) {
    return { name: '404'};
  }
});
const pinia = createPinia(); // 创建Pinia状态管理实例
const app = createApp(App); // 创建Vue应用实例，以App组件为根组件

// 全局配置
app.config.globalProperties.$api = api; // 将api模块挂载到全局属性，所有组件可通过this.$api(proxy.$api)访问

// 使用插件
app.use(ElementPlus); // 使用Element Plus组件库
app.use(pinia); // 使用Pinia状态管理
const store = useAllDataStore(); // 创建并使用Pinia Store实例
store.addMenu(router, "refresh"); // 刷新页面时重新添加动态路由，在app.use(router)之前
app.use(router); // 使用路由
// 挂载应用
app.mount("#app"); // 将应用挂载到HTML中id为"app"的DOM元素上

// 注册图标组件
// 循环注册所有Element Plus图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component); // 全局注册图标组件，可以直接在模板中使用
}
