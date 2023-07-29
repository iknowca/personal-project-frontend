<template>
  <v-card class="ma-10 pa-4 elevation-4" @click="goFolloweeBoardList"><p style="float: left;">Followee Board List</p><p style="float: right"> > </p></v-card>

</template>

<script>
import router from "@/router";

export default {
  name: "FolloweeBoardListComp",
  methods: {
    goFolloweeBoardList() {
      router.push({name: 'BoardFollowView'})
    }
  }
}

</script>
