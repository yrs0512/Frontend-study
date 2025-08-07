<script setup>
import CommonAside from "@/components/CommonAside.vue"
import CommonHeader from "@/components/CommonHeader.vue"
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 自定义左侧组件 -->
      <common-aside />
      <el-container>
        <el-header class="el-header">
          <common-header />
        </el-header>
        <el-main class="right-main">
          <!-- 当访问不同路由时，<router-view> 会自动替换为路由配置中对应的组件内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
  .common-layout,
  .lay-container {
    height: 100%;
  }
  .el-header {
    background-color: #333;
  }
</style>
