/**
 *  createWebHashHistory：创建基于 hash 模式的路由历史记录
 *  Hash 模式：URL 中会带有 #（如 http://example.com/#/home
 * 特点：不需要服务器端配置，适合纯静态部署
 */
import { createRouter, createWebHashHistory } from "vue-router";

// 指定路由规则
const routes = [
  {
    path: "/", // 根路径
    name: "main", // 路由名称
    component: () => import("@/views/Main.vue"), // 根组件（动态导入）
    redirect: "/login", // 自动重定向到/home
    children: [
      // 嵌套子路由
      {
        path: "home", // 子路径（相对路径）
        name: "home", // 子路由名称
        component: () => import("@/views/Home.vue"), // 子组件（动态导入）
      },
      {
        path: "user", // 子路径（相对路径）
        name: "user", // 子路由名称
        component: () => import("@/views/User.vue"), // 子组件（动态导入）
      },
      {
        path: "mall", // 子路径（相对路径）
        name: "mall", // 子路由名称
        component: () => import("@/views/Mall.vue"), // 子组件（动态导入）
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

// 创建路由实例
const router = createRouter({
  // 设置路由的模式
  history: createWebHashHistory(), // 使用 hash 模式
  routes, // 传入路由配置
});

// 导出路由实例
export default router;
