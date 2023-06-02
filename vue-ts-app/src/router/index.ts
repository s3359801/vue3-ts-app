import {createRouter, creteWebHistory, createWebHashHistory} from 'vue-router';
import {defineAsyncComponent} from 'vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: defineAsyncComponent(() => import('../pages/home.vue')),
            meta: {
                title: '首页',
            }
        }
    ]
})

// 全局路由守卫
router.beforeEach((to, from, next)=>{
    // console.log(to, from)
    if (to.meta.title) {
      document.title = `${to.meta.title}`;
    }
    next()
  })
  
  router.afterEach((to, from)=>{
    // console.log(to, from)
    console.log('afterEach')
  })
  
  export default router