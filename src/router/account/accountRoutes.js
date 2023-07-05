import LoginView from "@/views/account/LoginView.vue";
import JoinView from "@/views/account/JoinView.vue";

const AccountRoutes = [
  {
    path: '/login-view',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/join-view',
    name: 'JoinView',
    component: JoinView
  },
]

export default AccountRoutes