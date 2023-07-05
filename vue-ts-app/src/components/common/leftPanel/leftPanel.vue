<template>
  <div class="left-panel">
    <div class="left-panel-title">vue3 后台</div>
    <div class="left-panel-list">
      <left-panel-list></left-panel-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-panel {
  width: 200px !important;
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  color: #fff;
  height: 100vh;
}
.left-panel-title {
  font-size: 20px;
  color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.left-panel-title::after {
  content: '';
  width: 100%;
  height: 1px;
  transform: scale(1, 0.1);
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>

<script setup lang="ts">
import leftPanelList from './leftPanelList.vue'
</script>
