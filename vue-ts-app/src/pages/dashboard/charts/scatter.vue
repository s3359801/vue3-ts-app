<template>
  <div class="scatter-title">圆点图形</div>
  <div id="ec-line-main">dashboard</div>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance, inject } from 'vue'
import { colors, styleData } from '../dashboardData'
// 通过inject注入引入全局按需引入的echarts
const echarts: any = inject('$echarts')
onMounted(() => {
  var myChart = echarts.init(document.getElementById('ec-line-main'), null, {
    width: 600,
    height: 400
  })
  // 绘制图表
  myChart.setOption({
    grid: {
      left: 10,
      containLabel: true,
      bottom: 10,
      top: 10,
      right: 30
    },
    xAxis: {
      splitLine: {
        show: false
      }
    },
    yAxis: {
      splitLine: {
        show: false
      },
      scale: true
    },
    series: [
      {
        name: '1990',
        data: styleData[0],
        type: 'scatter',
        symbolSize: function (styleData) {
          return Math.sqrt(styleData[2]) / 5e2
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3]
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color: {
            type: 'radial',
            x: 0.4,
            y: 0.3,
            r: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)'
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)'
              }
            ]
          }
        }
      },
      {
        name: '2015',
        data: styleData[1],
        type: 'scatter',
        symbolSize: function (styleData) {
          return Math.sqrt(styleData[2]) / 5e2
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function (param) {
              return param.data[3]
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: {
            type: 'radial',
            x: 0.4,
            y: 0.3,
            r: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgb(129, 227, 238)'
              },
              {
                offset: 1,
                color: 'rgb(25, 183, 207)'
              }
            ]
          }
        }
      }
    ]
  })
})
</script>

<style lang="scss" scoped></style>
