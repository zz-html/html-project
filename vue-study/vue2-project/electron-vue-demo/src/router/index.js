import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/CommandTest",
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/CommandTest',
    name: 'CommandTest',
    component: () => import('../components/CommandTest.vue')
  }, 
  {
    path: '/DeployPage',
    name: 'DeployPage',
    component: () => import('../components/DeployPage.vue')
  }, 
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router