import OauthKakaoLoginComp from "@/components/account/OauthKakaoLoginComp.vue";
import OauthGoogleLoginComp from "@/components/account/OauthGoogleLoginComp.vue";

const OauthRoutes = [
  {
    path: "/oauth-kakao-login-comp",
    name: 'OauthKakaoLoginComp',
    component: OauthKakaoLoginComp
  },
  {
    path: "/oauth-google-login-comp",
    name: "OauthGoogleLoginComp",
    component: OauthGoogleLoginComp
  }
]

export default OauthRoutes