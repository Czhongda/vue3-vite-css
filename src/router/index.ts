import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },{
      path:'/gridTab',
      name:'gridTab',
      component: () => import('@/views/grid/index.vue')
    },{
      path:'/flexTab',
      name:'flexTab',
      component: () => import('@/views/flex/index.vue')
    },{
      path:'/refTem',
      name:'refTem',
      component: () => import('@/views/reftem/index.vue')
    },{
      path:'/compList',
      name:'compList',
      component: () => import('@/views/comlist/index.vue')
    },{
      path:'/asyncComp',
      name:'asyncComp',
      component: () => import('@/views/test/asyncComp/index.vue')
    },{
      path:'/compose',
      name:'compose',
      component: () => import('@/views/compose/index.vue')
    },{
      path:'/customdirec',
      name:'customdirec',
      component: () => import('@/views/customdirec/index.vue')
    }
    ,{
      path:'/transition',
      name:'transition',
      component: () => import('@/views/trans/transition/index.vue')
    },{
      path:'/transitionGroup',
      name:'transitionGroup',
      component: () => import('@/views/trans/group/index.vue')
    },{
      path:'/keepAlive',
      name:'keepAlive',
      component: () => import('@/views/trans/alive/index.vue')
    },{
      path:'/teleport',
      name:'teleport',
      component: () => import('@/views/trans/tele/index.vue')
    },{
      path:'/suspense',
      name:'suspense',
      component: () => import('@/views/trans/susp/index.vue')
    }
  ]
})

export default router
