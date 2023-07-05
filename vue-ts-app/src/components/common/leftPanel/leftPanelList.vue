<template>
  <Row>
    <Col class="list-col">
      <Menu
        :theme="state.theme"
        mode="vertical"
        :accordion="true"
        width="200px"
      >
        <Submenu
          v-for="(item, index) in leftPanelList"
          :key="item.name + index"
          :name="item.name"
        >
          <template #title>
            <Icon type="ios-paper" />
            {{ item.name }}
          </template>
          <MenuItem
            v-for="(itm, idx) in item.childrens"
            :name="itm.id"
            :key="itm.id + idx"
            :to="itm.routerName"
            >{{ itm.name }}</MenuItem
          >
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>
<style lang="scss" scoped>
.list-col {
  width: 100%;
}
</style>
<script setup lang="ts">
import { reactive, ref, createApp } from 'vue'
import { leftPanelList } from './leftPanelData'
const state = reactive({ theme: 'dark' })
</script>
