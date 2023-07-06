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
import {mapActions} from "vuex";

const MapModule = 'MapModule'
export default {
  name: 'App',
  components: {AppFooter, AppBar},
  mounted() {
    this.requestMap()
  },
  methods: {
    ...mapActions(MapModule, ['requestMap'])
  }
}
</script>
