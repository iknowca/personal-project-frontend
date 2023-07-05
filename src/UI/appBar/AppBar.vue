<template>
  <v-app-bar>
    <v-btn @click="goHome">
      FINE
    </v-btn>
<v-spacer></v-spacer>
    <v-btn @click="tryLogin">
      LOGIN
    </v-btn>
    <v-btn @click="tryJoin">
      JOIN
    </v-btn>
  </v-app-bar>
</template>

<script>
import router from "@/router";
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
    }
  }
}
</script>

<style scoped>

</style>