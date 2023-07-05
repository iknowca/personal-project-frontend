<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>

import AppBar from "@/UI/appBar/AppBar.vue";
import AppFooter from "@/UI/footer/AppFooter.vue";

export default {
  name: 'App',
  components: {AppFooter, AppBar},
}
</script>
