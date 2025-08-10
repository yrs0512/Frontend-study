<script setup>
</script>

<template>
  <!-- 会根据路由配置动态渲染不同的页面组件，如:Main.vue -->
  <router-view></router-view>
</template>

<style>
/* 设置全屏展示，防止滚动条 */
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
