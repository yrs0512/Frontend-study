<script setup>
import CommonAside from "@/components/CommonAside.vue"
import CommonHeader from "@/components/CommonHeader.vue"
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 左侧导航 -->
      <common-aside />

      <el-container>
        <!-- 顶部导航 -->
        <el-header class="el-header">
          <common-header />
        </el-header>
        
        <!-- 主内容区 -->
        <el-main class="right-main">
          <!-- 当访问不同路由时，<router-view> 会自动替换为路由配置中对应的组件内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<!-- lang="less"：使用 LESS 预处理器 -->
<style scoped lang="less">
.common-layout,
.lay-container {
  height: 100%;
}

.el-header {
  background-color: #333;
}
</style>
