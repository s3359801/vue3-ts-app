<template>
  <div id="ec-main">dashboard</div>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance, inject } from 'vue'
// 通过inject注入引入全局按需引入的echarts
const echarts: any = inject('$echarts')
onMounted(() => {
  var myChart = echarts.init(document.getElementById('ec-main'), null, {
    width: 600,
    height: 400
  })
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})
</script>

<style lang="scss" scoped></style>
