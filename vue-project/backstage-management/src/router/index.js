import { createRouter, createWebHashHistory } from "vue-router";

// 指定路由规则

const routes = [
  {
    path: "/",                 // 根路径
    name: "main",              // 路由名称
    component: () => import("@/views/Main.vue"), // 根组件（动态导入）
    redirect: "/home",         // 自动重定向到/home
    children: [                // 嵌套子路由
      {
        path: "home",          // 子路径（相对路径）
        name: "home",          // 子路由名称
        component: () => import("@/views/Home.vue"), // 子组件（动态导入）
      },
    ],
  },
];

const router = createRouter({
  // 设置路由的模式
  history: createWebHashHistory(),
  routes,
});

export default router;
