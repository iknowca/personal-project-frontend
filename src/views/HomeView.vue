<template>
  <v-container  fluid class="pa-0">
    <map-comp v-if="isLogin"></map-comp>
    <hello-world v-else></hello-world>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import MapComp from "@/components/map/MapComp.vue";
import {mapState} from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

const AccountModule = 'AccountModule'
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    MapComp
  },
  computed: {
    ...mapState(AccountModule, ['isLogin'])
  }
});
</script>
