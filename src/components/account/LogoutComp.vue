<script>
import {defineComponent} from 'vue'
import router from "@/router";
import {mapActions} from "vuex";

const AccountModule = "AccountModule"
export default defineComponent({
  name: "LogoutComp",
  methods: {
    logoutBtn() {
      this.logout()
      router.push('/')
    },
    ...mapActions(AccountModule, ['logout'])
  }
})
</script>

<template>
<v-card class="ma-10 pa-4 elevation-4" @click="logoutBtn"><p style="float: left; color: red">logout</p><p style="float: right"> > </p></v-card>
</template>

<style scoped>

</style>