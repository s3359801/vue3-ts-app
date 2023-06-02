<template>
  <div class="main">home{{ state.conut }}</div>
  <button @click="increment">按钮</button>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import { useHomeStore } from '@/store/homeStore'
const state = reactive({ conut: 0 })
const homeStore = useHomeStore()
console.log(homeStore.$state)
function increment(): void {
  state.conut++
}
</script>
