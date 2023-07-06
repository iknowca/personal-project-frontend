const env = {
  mode: process.env.NODE_ENV,
  api: {
    MAIN_API_URL: process.env.VUE_APP_BASE_URL,
    MAP_API_KEY: process.env.VUE_APP_MAP_API_KEY
  },
}

export default  env