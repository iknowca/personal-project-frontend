import axiosSpring from "@/utility/axios/axiosInst";
export default {
  requestKakaoLoginToSpring() {
    return axiosSpring.get('/auth/kakao')
      .then((res) => {
        return res.data
      })
  },
  // eslint-disable-next-line no-empty-pattern
  oauthLoginToSpring({}, payload) {
    return axiosSpring.get(`/auth/kakao/oauth-code?code=${payload}`)
  }

}