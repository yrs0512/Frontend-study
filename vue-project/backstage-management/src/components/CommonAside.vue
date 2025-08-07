<!-- 侧边栏组件 -->
<template>
    <el-aside :width="width">
      <!-- 在 el-menu 中，影响菜单项的文字颜色 -->
       <!-- 控制菜单是否处于折叠状态（true收起/false展开） -->
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <!-- isCollapse: false 显示文字，true 隐藏文字 -->
        <h3 v-show="!isCollapse">通用后台管理</h3>
        <h3 v-show="isCollapse">后台</h3>
        <!-- 绑定 item.path 作为菜单项的索引（用于路由跳转或菜单高亮） -->
         <!-- 使用 item.name 作为 Vue 的 key，优化渲染性能（确保唯一性） -->
        <el-menu-item
            v-for="item of noChildren"
            :index="item.path"
            :key="item.name"
        >
          <!-- 通过 :is="item.icon" 动态渲染 item.icon 指定的组件（比如其他 SVG 图标） -->
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>      
        <el-sub-menu 
            v-for="item of hasChildren"
            :index="item.path"
            :key="item.name"
        >
          <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
            v-for="(subItem, subIndex) of item.children"
            :index="subItem.path"
            :key="subItem.name"            
            >
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>        
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAllDataStore } from '@/stores';
const list =ref([
      	{
          path: '/home',
          name: 'home',
          label: '首页',
          icon: 'house',
          url: 'Home'
      	},
        {
            path: '/mall',
            name: 'mall',
            label: '商品管理',
            icon: 'video-play',
            url: 'Mall'
        },
        {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'User'
        },
        {
            path: 'other',
            label: '其他',
            icon: 'location',
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    label: '页面1',
                    icon: 'setting',
                    url: 'Page1'
                },
                {
                    path: '/page2',
                    name: 'page2',
                    label: '页面2',
                    icon: 'setting',
                    url: 'Page2'
                }
            ]
        }
])
// filter(): 数组方法，筛选符合条件的元素
// !item.children: 筛选条件，选择没有 children 属性的对象
const noChildren = computed(() => list.value.filter(item => !item.children))
const hasChildren =computed(() => list.value.filter(item => item.children))
// 获取 store 实例，包含state、getters、actions 等属性
const store = useAllDataStore()
// 创建一个响应式的计算属性，绑定到 Store 中的 isCollapse 状态
const isCollapse = computed(() => store.state.isCollapse)
// width
const width = computed(() => store.state.isCollapse ? '64px' : '180px')

</script>

<style scoped lang="less">
.icons {
    width: 18px;
    height: 18px;
    margin-right: 5px;
}
.el-menu {
    border-right: none;
    h3{
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