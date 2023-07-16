import JoinView from "@/views/account/JoinView.vue";
import SetAdditionalInfoView from "@/views/account/SetAdditionalInfoView.vue";
import MyPageView from "@/views/account/MyPageView.vue";

const AccountRoutes = [
  {
    path: '/join-view',
    name: 'JoinView',
    component: JoinView
  },
  {
    path: '/set-additional-info-view',
    name: 'SetAdditionalInfoView',
    component: SetAdditionalInfoView
  },
  {
    path: '/my-page-view',
    name: '/MyPageView',
    component: MyPageView
  }
]

export default AccountRoutes