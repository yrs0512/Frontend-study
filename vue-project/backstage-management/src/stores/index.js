// 导入依赖
import { defineStore } from "pinia";
import { ref } from "vue";

// 初始化状态函数
function initState() {
  return {
    isCollapse: false,
    tags: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentMenu: null,
    menuList: [],
    token: "",
    routerList: [],
  };
}

// 创建 Store
// 创建了一个名为 useAllDataStore 的 Store，用于管理应用的状态
export const useAllDataStore = defineStore("allData", () => {
  // ref(data) state 属性
  // computed getters
  // function actions
  // ref 包裹，成为响应式
  const state = ref(initState());

  function selectMenu(val) {
    if (val.name === "home") {
      state.value.currentMenu = null;
    } else {
      let index = state.value.tags.findIndex((item) => item.name === val.name);
      index === -1 ? state.value.tags.push(val) : "";
    }
  }

  function updateTags(tag) {
    let index = state.value.tags.findIndex((item) => item.name === tag.name);
    state.value.tags.splice(index, 1);
  }

  function updateMenuList(val) {
    state.value.menuList = val;
  }

  function addMenu(router) {
    const menu = state.value.menuList;
    const module = import.meta.glob("../views/**/*.vue");
    const routeArr = [];
    menu.forEach((item) => {
      if (item.children) {
        item.children.forEach((val) => {
          let url = `../views/${val.url}.vue`;
          val.component = module[url];
          routeArr.push(...item.children);
        });
      } else {
        let url = `../views/${item.url}.vue`;
        item.component = module[url];
        routeArr.push(item);
      }
    });
    routeArr.forEach((item) => {
      state.value.routerList.push(router.addRoute("Main", item));
    });
  }
  function clean() {
    statevalue.routerList.forEach((item) => {
      if(item) item();
    });
    state.value = initState();
    // 删除我们本地的缓存
    localStorage.removeItem("store");
  }

  return {
    state,
    selectMenu,
    updateTags,
    updateMenuList,
    addMenu,
    clean,
  };
});
