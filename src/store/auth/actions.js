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
  },
  requestGoogleLoginToSpring() {
    return axiosSpring.get('/auth/google')
      .then((res) => {
        return res.data
      })
  },
  // eslint-disable-next-line no-empty-pattern
  oauthGoogleLoginToSpring({}, code) {
    console.log(code)
    return axiosSpring.get(`/auth/google/access-token`, {params: {code: code}})
  }

}