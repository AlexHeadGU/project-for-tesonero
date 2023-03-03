import { createRouter, createWebHashHistory } from 'vue-router'
import vMainPage from '../components/main-page/v-main-page'

const routes = [
  {
    path: '/',
    name: 'home',
    component: vMainPage
  },
  {
    path: '/about',
    name: 'about',
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
