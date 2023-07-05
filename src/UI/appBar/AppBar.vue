<template>
  <v-app-bar>
    <v-btn @click="goHome">
      FINE
    </v-btn>
<v-spacer></v-spacer>
    <div v-if="!isLogin">
    <v-btn @click="tryLogin">
      LOGIN
    </v-btn>
    <v-btn @click="tryJoin">
      JOIN
    </v-btn>
    </div>
    <div v-else>
      <v-btn @click="logout">
        LOGOUT
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import router from "@/router";
import {mapMutations, mapState} from "vuex";

const AccountModule = 'AccountModule'
export default {
  name: "AppBar",
  methods: {
    goHome() {
      router.push('/')
    },
    tryLogin() {
      router.push('/login-view')
    },
    tryJoin() {
      router.push('/join-view')
    },
    logout() {
      this.SET_LOGIN_STATE(false)
      console.log(this.isLogin)
      router.push('/')
    },
    ...mapMutations(AccountModule, ['SET_LOGIN_STATE'])
  },
  computed: {
    ...mapState(AccountModule, ['isLogin'])
  }
}
</script>

<style scoped>

</style>