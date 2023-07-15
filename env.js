const env = {
  mode: process.env.NODE_ENV,
  api: {
    MAIN_API_URL: process.env.VUE_APP_BASE_URL,
    MAP_API_KEY: process.env.VUE_APP_MAP_API_KEY,

    KAKAO_OAUTH_KEY: process.env.Vue_APP_KAKAO_OAUTH_KEY,
    KAKAO_REDIRECTION_URL: process.env.VUE_APP_KAKAO_REDIRECTION_URL
  },
}

export default  env