// 导入依赖
import { defineStore } from "pinia";
import { ref } from "vue";

// 初始化状态函数
function initState() {
    return {
        isCollapse: false,
    }
}

// 创建 Store
// 创建了一个名为 useAllDataStore 的 Store，用于管理应用的状态
export const useAllDataStore = defineStore("allData", () => {
  // ref(data) state 属性
  // computed getters
  // function actions
  // ref 包裹，成为响应式
  const state = ref(initState());
  return {
    state,
  };
});