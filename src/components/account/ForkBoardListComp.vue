<template>
  <v-card class="ma-10 pa-4 elevation-4" @click="goForkBoardList"><p style="float: left;">Fork Board List</p><p style="float: right"> > </p></v-card>

</template>

<script>
import router from "@/router";

export default {
  name: "ForkBoardListComp",
  methods: {
    goForkBoardList() {
      router.push({name: 'BoardForkView'})
    }
  }
}

</script>
