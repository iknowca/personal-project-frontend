import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountRoutes from "@/router/account/accountRoutes";
import BoardRoutes from "@/router/board/boardRoutes";
import OauthRoutes from "@/router/oauth/oauthRoutes";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...AccountRoutes,
  ...BoardRoutes,
  ...OauthRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
