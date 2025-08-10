<script setup>
// 导入依赖
import { useAllDataStore } from '@/stores';

// 根据传入的用户名动态生成图片资源的 URL
const getImageUrl = (user) => {
    return new URL(`../assets/images/${user}.png`, import.meta.url).href
}

// 获取 Store 实例
const store = useAllDataStore()

// 状态修改方法
// Vue3 箭头函数，直接访问组件实例
const collapseHandle = () => {
    store.state.isCollapse = !store.state.isCollapse
}
</script>

<!-- 页面头部组件 -->
<template>
  <div class="header">

    <!-- 左侧内容 -->
    <div class="l-content">
        <!-- 会生成一个小型按钮，按钮内部显示一个 menu 图标（假设已注册或全局可用） -->
         <!-- el-button：Element Plus 提供的按钮组件 -->
        <el-button size="small" @click="collapseHandle">
            <!-- 动态组件 <component>：Vue 的特殊组件，用于动态渲染其他组件 -->
            <component class="icons" is="menu"></component>
        </el-button>

        <!-- 面包屑 -->
         <!-- separator="/"：指定面包屑项之间的分隔符为斜杠 / -->
        <el-breadcrumb separator="/" class="bread">
            <!-- :to="{ path: '/' }"：绑定路由路径，点击后会跳转到首页 -->
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <!-- 右侧内容 -->
    <div class="r-content">
        <!-- 下拉菜单 -->
        <el-dropdown trigger="click">
            <!-- 触发区域 (el-dropdown-link) -->
            <span class="el-dropdown-link">
                <!-- 动态加载用户头像图片 -->
                <img :src="getImageUrl('user')" class="user">
                <!-- 添加一个向下箭头图标 -->
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            </span>
            <!-- 下拉菜单 (#dropdown 插槽) -->
            <template #dropdown>
                <!-- 下拉菜单的选项容器 -->
                <el-dropdown-menu>
                    <!-- 单个菜单项，点击可触发操作 -->
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>   
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between; /* 子元素左右两端对齐 */
    align-items: center;         /* 子元素垂直居中 */
    width: 100%;
    height: 100%;
    background-color: #333;
}
.icons {
    width: 20px;
    height: 20px;
}
.l-content {
    display: flex;
    align-items: center; /* 子元素垂直居中 */
    .el-button {
        margin-right:20px; /* 按钮右侧间距 */
    }
}
.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%; /* 圆形头像 */
    }
}
// 深度选择器覆盖面包屑文字
:deep(.bread span) {
    color: #fff !important; /* 强制文字白色 */
    cursor: pointer !important; /* 鼠标悬停手型指针 */
}
</style>