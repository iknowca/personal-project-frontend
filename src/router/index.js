import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountRoutes from "@/router/account/accountRoutes";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...AccountRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
