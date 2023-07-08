<template>
  <v-app-bar>
    <v-btn @click="goHome">
      FINE
    </v-btn>
      <v-btn @click="goBoardListView">
        BOARD
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
      <v-btn @click="goToWriteView">
        WRITE
      </v-btn>
      <v-btn>
        mypagell
      </v-btn>
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
      localStorage.removeItem('userToken')
      router.push('/')
    },
    goToWriteView() {
      router.push('/write-view')
    },
    goBoardListView() {
      router.push('/board-list-view')
    },
    ...mapMutations(AccountModule, ['SET_LOGIN_STATE'])
  },
  computed: {
    ...mapState(AccountModule, ['isLogin'])
  },
  created() {
    if(localStorage.getItem('userToken')) {
      this.SET_LOGIN_STATE(true)
    }
  }
}
</script>

<style scoped>

</style>