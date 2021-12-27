import Vue from 'vue'
import VueRouter from 'vue-router'
import DepartManage from '../views/DepartManage.vue'
import DepartCheck from '../views/DepartCheck.vue'
import MonthManage from '../views/MonthManage.vue'


Vue.use(VueRouter)

const routes = [ 
  {
    path: '/DepartManage',
    name: 'DepartManage',
    component: DepartManage
  },
  {
    path:'/DepartCheck',
    name:'DepartCheck',
    component:DepartCheck
  },
  {
    path:'/MonthManage',
    name:'MonthManage',
    component:MonthManage
  }
]

const router = new VueRouter({
  routes
})

export default router
