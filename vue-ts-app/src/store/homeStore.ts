import { defineStore } from 'pinia'
export const useHomeStore = defineStore('storeId', {
  state: () => {
    return {
      name: 'home'
    }
  },
  getters:{},
  actions:{}
})
