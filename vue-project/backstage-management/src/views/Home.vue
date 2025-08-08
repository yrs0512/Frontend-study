<script setup>
import { ref, getCurrentInstance, onMounted, reactive } from 'vue'
import * as echarts from 'echarts'
// import axios from 'axios'
/**
 * proxy 是当前组件实例的代理对象，可以访问:
 * 全局注入的 API（如 $api，通常是封装好的 Axios 请求方法）
 * 组件属性（如 $router, $store 等）
 */
const { proxy } = getCurrentInstance()
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href
}
const tableData = ref([
])

const countData = ref([])

const chartData = ref([]) // 未使用

const observer = ref(null)

const tableLabel = ref({
  name: "课程",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
})

//这个是折线图和柱状图 两个图表共用的公共配置
// echarts 官网
const xOptions = reactive({
      // 图例文字颜色
      textStyle: {
        color: "#333",
      },
      legend: {},
      grid: {
        left: "20%",
      },
      // 提示框
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category", // 类目轴
        data: [],
        axisLine: {
          lineStyle: {
            color: "#17b3a3",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#333",
        },
      },
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
        },
      ],
      color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
      series: [],
})

const pieOptions = reactive({
  tooltip: {
    trigger: "item",
  },
  legend: {},
  color: [
    "#0f78f4",
    "#dd536b",
    "#9462e5",
    "#a6a6a6",
    "#e1bb22",
    "#39c362",
    "#3ed1cf",
  ],
  series: []
})

// // 使用 Axios 发起 HTTP 请求并处理响应
// // 使用 Promise 的 .then() 处理成功响应
// // res 是响应对象
// axios({
//   url:'/api/home/getTableData',
//   method:'get'
// }).then(res => {

//   // 要学会制造假数据 把交互的请求的流程根据接口文档跑通 还要制造出数据
//   // mock 拦截住请求 制造的数据根据接口文档
//   /**res.data
//    * {
//    *   "code": 200,
//    *   "data": {
//    *   "tableData": [...]  // 实际的表格数据数组
//    *           }
//    * }
//    */
//   if(res.data.code === 200) {
//     console.log(res.data.data.tableData);
//     tableData.value = res.data.data.tableData
//   }
// })
const getTableData = async () => {
  const data = await proxy.$api.getTableData()  // 调用 API 获取数据
  tableData.value = data.tableData
}
const getCountData = async () => {
  const data = await proxy.$api.getCountData()  // 调用 API 获取数据
  countData.value = data
}
const getChartData = async () => {
  // 解构赋值按属性名严格匹配
  const { orderData, userData, videoData } = await proxy.$api.getChartData()  // 调用 API 获取数据
  // 对第一个图表进行 x 轴和 series 赋值
  xOptions.xAxis.data = orderData.date;
  xOptions.series = Object.keys(orderData.data[0]).map(val => {
    return {
     name: val,
     data: orderData.data.map(item => item[val]),
     type: 'line',
    }
  })
  // 渲染到对应 ref 中
  const oneEchart = echarts.init(proxy.$refs['echart'])
  oneEchart.setOption(xOptions)

  // 对第二个图表进行 x 轴和 series 赋值
  xOptions.xAxis.data = userData.map(item => item.date)
  xOptions.series = [
    {
      name: '新增用户',
      data: userData.map(item => item.new),
      type: 'bar'
    },
    {
      name: '活跃用户',
      data: userData.map(item => item.active),
      type: 'bar'
    },
  ]
  // 渲染到对应 ref 中
  const twoEchart = echarts.init(proxy.$refs['userEchart'])
  twoEchart.setOption(xOptions)

  // 对饼状图进行渲染
  pieOptions.series = [
    {
      data: videoData,
      type: 'pie'
    },
  ]
  // 渲染到对应 ref 中
  const threeEchart = echarts.init(proxy.$refs['videoEchart'])
  threeEchart.setOption(pieOptions)

  // 监听页面的变化
    // 如果监听的容器大小发生变化，改变了以后，会执行回调函数
  observer.value = new ResizeObserver(() => { 
    oneEchart.resize()
    twoEchart.resize()
    threeEchart.resize()
  })  

  // 容器存在
  if(proxy.$refs['echart']) {
    observer.value.observe(proxy.$refs['echart'])
  }

}
onMounted(() => {
  getTableData()
  getCountData()
  getChartData()
})
</script>

<template>
  <!-- :gutter="20" 设置行之间的间隔为 20px -->
  <el-row class="home" :gutter="20">
    <!-- :span="8" 表示该列占据 8/24 的宽度 -->
     <!-- 首页左侧 -->
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user" />
          <div class="user-info">
            <p class="user-info-admin">Admin</p>
            <p class="user-info-p">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2025-08-07</span></p>
          <p>上次登录地点:<span>福建</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" class="user-table">
        <el-table :data="tableData">
          <!-- 遍历 tableLabel 对象的键值对 -->
          <!-- prop指定该列对应数据项的属性名，从el-table中获取 -->
          <el-table-column v-for="(val, key) of tableLabel" :key="key" :prop="key" :label="val">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 首页右侧 -->
    <el-col :span="16" style="margin-top: 20px">
      <!-- 首页 count 统计 -->
      <div class="num">
        <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item of countData" :key="item.name">
          <component :is="item.icon" class="icons" :style="{ background: item.color }"></component>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">￥{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card class="top-echart">
        <div ref="echart" style="height: 280px"></div>
      </el-card>
      <!-- 其余图表 -->
      <div class="graph">
        <!-- 柱状图 -->
        <el-card>
          <div ref="userEchart" style="height: 240px;"></div>
        </el-card>
        <!-- 饼状图 -->
        <el-card>
          <div ref="videoEchart" style="height: 240px;"></div>
        </el-card>
      </div>

    </el-col>

  </el-row>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  overflow: hidden;

  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }

    .user-info {
      p {
        line-height: 40px;
      }

      .user-info-admin {
        font-size: 35px;
      }

      .user-info-p {
        color: #999;
      }
    }
  }

  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;

      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }

  .user-table {
    margin-top: 20px;
  }

  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icons {
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 15px;
        text-align: center;
        color: #999;
      }      
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
      height: 260px;
    }
  }
}
</style>
