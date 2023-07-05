import { createRouter, creteWebHistory, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/introduce",
      component: defineAsyncComponent(() => import('../pages/home.vue')),
      meta: {
        title: '首页',
      },
      children: [
        {
          name: 'content',
          path: '/content',
          component: defineAsyncComponent(() => import('@/components/common/content/content.vue')),
        },
        {
          name: 'introduce',
          path: '/introduce',
          component: defineAsyncComponent(() => import('@/pages/introduce/introduce.vue')),
          meta: {
            title: '系统简介'
          }
        },
        {
          name: 'dashboard',
          path: '/dashboard',
          component: defineAsyncComponent(() => import('@/pages/dashboard/dashboard.vue')),
          meta: {
            title: '大盘数据'
          }
        },
        {
          name: 'addShop',
          path: '/addShop',
          component: defineAsyncComponent(() => import('@/pages/addShop/addShop.vue')),
          meta: {
            title: '增加商品'
          }
        },
        {
          name: 'swiper',
          path: '/swiper',
          component: defineAsyncComponent(() => import('@/pages/swiper/swiper.vue')),
          meta: {
            title: '轮播图配置'
          }
        },
        {
          name: 'hot',
          path: '/hot',
          component: defineAsyncComponent(() => import('@/pages/hot/hot.vue')),
          meta: {
            title: '热销商品配置'
          }
        },
        {
          name: 'new',
          path: '/new',
          component: defineAsyncComponent(() => import('@/pages/new/new.vue')),
          meta: {
            title: '新品上线配置'
          }
        }
      ]
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

router.afterEach((to, from) => {
  // console.log(to, from)
  console.log('afterEach')
})

export default router