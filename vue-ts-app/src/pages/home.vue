<template>
  <div class="main">
    <div class="left">
      <LeftPanel></LeftPanel>
    </div>
    <div class="right">
      <div class="right-toolbar">
        <toolbar></toolbar>
      </div>
      <div class="right-content">
        <div class="right-inner">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { reactive, ref, createApp } from 'vue'
import { useHomeStore } from '@/store/homeStore'
import LeftPanel from '../components/common/leftPanel/leftPanel.vue'
import toolbar from '../components/common/toolbar/toolbar.vue'
const app = createApp({})
const state = reactive({ conut: 0 })
const homeStore = useHomeStore()
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 100%;
  .right {
    width: 100%;
  }
  .right-toolbar {
    position: fixed;
    width: 100%;
  }
  .right-content {
    margin-top: 50px;
    padding: 20px;
    max-height: calc(100vh - 50px);
    box-sizing: border-box;
    overflow-y: auto;
  }
}
</style>
