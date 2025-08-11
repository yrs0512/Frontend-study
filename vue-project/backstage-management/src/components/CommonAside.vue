<script setup>
// 导入依赖
import { ref, computed } from 'vue';
import { useAllDataStore } from '@/stores';
import { useRoute, useRouter } from 'vue-router';

// 数据定义
// const list = ref([
//     {
//         path: '/home',  // 路由路径
//         name: 'home',   // 路由名称
//         label: '首页',  // 菜单显示文本
//         icon: 'house',  // Element Plus 图标组件名
//         url: 'Home'     // 对应的组件路径
//     },
//     {
//         path: '/mall',
//         name: 'mall',
//         label: '商品管理',
//         icon: 'video-play',
//         url: 'Mall'
//     },
//     {
//         path: '/user',
//         name: 'user',
//         label: '用户管理',
//         icon: 'user',
//         url: 'User'
//     },
//     {
//         path: 'other',
//         label: '其他',
//         icon: 'location',
//         children: [     // 子菜单项数组
//             {
//                 path: '/page1',
//                 name: 'page1',
//                 label: '页面1',
//                 icon: 'setting',
//                 url: 'Page1'
//             },
//             {
//                 path: '/page2',
//                 name: 'page2',
//                 label: '页面2',
//                 icon: 'setting',
//                 url: 'Page2'
//             }
//         ]
//     }
// ])
const list = computed(() => store.state.menuList)

// 计算属性
// filter(): 数组方法，筛选符合条件的元素
// !item.children: 筛选条件，选择没有 children 属性的对象
const noChildren = computed(() => list.value.filter(item => !item.children))
const hasChildren = computed(() => list.value.filter(item => item.children))
const activeMenu = computed(() => route.path)

// Pinia 状态管理
// 获取 store 实例，包含state、getters、actions 等属性
const store = useAllDataStore()
// 创建一个响应式的计算属性，绑定到 Store 中的 isCollapse 状态
const isCollapse = computed(() => store.state.isCollapse)
const width = computed(() => store.state.isCollapse ? '64px' : '180px')

// 菜单点击事件处理
const router = useRouter()
const route = useRoute()
const handleMenu = (item) => {
    router.push(item.path)
    store.selectMenu(item)
}
</script>

<!-- 侧边栏组件 -->
<template>
    <el-aside :width="width">
        <!-- 在 el-menu 中，影响菜单项的文字颜色 -->
        <!-- collapse: 控制菜单是否处于折叠状态（true收起/false展开） -->
        <!-- collapse-transition: 设置菜单的动画效果 -->
        <el-menu background-color="#545c64" text-color="#fff" :collapse="isCollapse" :collapse-transition="false"
            :default-active="activeMenu">

            <!-- 标题区 -->
            <!-- isCollapse: false 显示文字，true 隐藏文字 -->
            <h3 v-show="!isCollapse">通用后台管理</h3>
            <h3 v-show="isCollapse">后台</h3>

            <!-- 无子菜单项 -->
            <!-- 绑定 item.path 作为菜单项的索引（用于路由跳转或菜单高亮） -->
            <!-- 使用 item.name 作为 Vue 的 key，优化渲染性能（确保唯一性） -->
            <el-menu-item v-for="item of noChildren" :index="item.path" :key="item.name" @click="handleMenu(item)">
                <!-- 通过 :is="item.icon" 动态渲染 item.icon 指定的组件（比如其他 SVG 图标） -->
                <component class="icons" :is="item.icon"></component>
                <span>{{ item.label }}</span>
            </el-menu-item>

            <!-- 有子菜单项 -->
            <el-sub-menu v-for="item of hasChildren" :index="item.path" :key="item.name">
                <!-- 具名插槽，用于自定义子菜单的标题区域 -->
                <template #title>
                    <component class="icons" :is="item.icon"></component>
                    <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(subItem, subIndex) of item.children" :index="subItem.path" :key="subItem.name"
                        @click="handleMenu(subItem)">
                        <component class="icons" :is="subItem.icon"></component>
                        <span>{{ subItem.label }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>

        </el-menu>
    </el-aside>
</template>

<style scoped lang="less">
.icons {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}

.el-menu {
    border-right: none;

    h3 {
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
}

.el-aside {
    height: 100%;
    background-color: #545c64;
}
</style>