<template>
  <v-container  fluid class="pa-0">
    <map-comp v-if="isLogin"></map-comp>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import MapComp from "@/components/map/MapComp.vue";
import {mapState} from "vuex";

const AccountModule = 'AccountModule'
export default defineComponent({
  name: 'HomeView',

  components: {
    MapComp
  },
  computed: {
    ...mapState(AccountModule, ['isLogin'])
  }
});
</script>
