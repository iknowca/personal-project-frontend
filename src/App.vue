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

<style>
@font-face{
    font-family:'bitbit';
    src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
}
#app {
    font-family:'bitbit';
}
</style>