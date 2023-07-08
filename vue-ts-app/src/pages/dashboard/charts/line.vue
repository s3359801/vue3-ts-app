<template>
  <div class="line-title">线形图</div>
  <div id="ec-main"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue'
// 通过inject注入引入全局按需引入的echarts
const echarts: any = inject('$echarts')
onMounted(() => {
  const myChart = echarts.init(document.getElementById('ec-main'), null, {
    width: 600,
    height: 400
  })
  myChart.setOption({
    legend: {},
    tooltip: {},
    dataset: {
      // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
      // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
      // 如果不指定 dimensions，也可以通过指定 series.encode
      // 完成映射，参见后文。
      dimensions: ['product', '2015', '2016', '2017', '2018'],
      source: [
        {
          product: 'Matcha Latte',
          '2015': 43.3,
          '2016': 85.8,
          '2017': 93.7,
          '2018': 95.7
        },
        {
          product: 'Milk Tea',
          '2015': 83.1,
          '2016': 73.4,
          '2017': 55.1,
          '2018': 75.7
        },
        {
          product: 'Cheese Cocoa',
          '2015': 86.4,
          '2016': 65.2,
          '2017': 82.5,
          '2018': 65.7
        },
        {
          product: 'Walnut Brownie',
          '2015': 72.4,
          '2016': 53.9,
          '2017': 39.1,
          '2018': 105.7
        }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  })
})
</script>

<style lang="scss" scoped></style>
