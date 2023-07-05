<template>
  <div class="toolbar">
    <div class="toolbar-title">{{ data.titleName }}</div>
    <div class="toobar-user-menu">文</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const data = reactive({
  titleName: ''
})
const routeVal = router.currentRoute
watch(
  () => routeVal.value.meta.title,
  title => {
    data.titleName = title as string
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.toolbar {
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
}
</style>
