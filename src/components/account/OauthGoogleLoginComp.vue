<template>
<div></div>
</template>

<script>
import {useRoute} from "vue-router";
import {mapActions, mapState} from "vuex";
import router from "@/router";
const AccountModule = "AccountModule"
const AuthModule = "AuthModule"
export default {
  name: "OauthGoogleLoginComp",
  methods: {
    ...mapActions(AuthModule, ['oauthGoogleLoginToSpring']),
    ...mapActions(AccountModule, ['setAccountInfo']),
    async setRedirectData() {

      const route = useRoute()
      const code = route.query.code
      await this.oauthGoogleLoginToSpring(code)
        .then(res=> {
          this.setAccountInfo(res)
        })
      if (!this.nickName){
        router.push('/set-additional-info-view')
      } else {
        router.push('/')
      }
    }
  },
  computed: {
    ...mapState(AccountModule, ['nickName'])
  },
  created() {
    this.setRedirectData()
  }
}
</script>

<style scoped>

</style>