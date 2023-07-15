import LoginView from "@/views/account/LoginView.vue";
import JoinView from "@/views/account/JoinView.vue";
import SetAdditionalInfoView from "@/views/account/SetAdditionalInfoView.vue";

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
  {
    path: '/set-additional-info-view',
    name: 'SetAdditionalInfoView',
    component: SetAdditionalInfoView
  }
]

export default AccountRoutes