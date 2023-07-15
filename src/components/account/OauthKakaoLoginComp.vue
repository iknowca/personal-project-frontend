<script>
import {defineComponent} from 'vue'
import {mapActions, mapState} from "vuex";
import {useRoute } from 'vue-router'
import router from "@/router";

const AuthModule = 'AuthModule'
const AccountModule = 'AccountModule'
export default defineComponent({
  name: "OauthKakaoLoginComp",
  computed: {
    ...mapState(AccountModule, ['nickName'])
  },
  methods: {
    ...mapActions(AuthModule, ['oauthLoginToSpring']),
    ...mapActions(AccountModule, ['setAccountInfo']),
    async setRedirectData() {
      const route = useRoute()
      const code = route.query.code
      await this.oauthLoginToSpring(code)
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
  created() {
    this.setRedirectData()
  }
})
</script>

<template>
<v-container class="text-center">logining</v-container>
</template>

<style scoped>

</style>