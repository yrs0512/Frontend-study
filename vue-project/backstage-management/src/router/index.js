import { createRouter, createWebHashHistory } from "vue-router"

// 指定路由规则

const routes = [
    {
        path:'/',
        name:'main',
        component: () => import('@/views/Main.vue'),
    }
]

const router = createRouter({
    // 设置路由的模式
    history: createWebHashHistory(),
    routes,
});

export default router;