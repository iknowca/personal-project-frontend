<template>
<div class="pa-0">
  <v-row><v-col cols="1">
  <v-avatar>
    <v-img :src="writer.profileImage"></v-img>
  </v-avatar>
  </v-col>
    <v-col>
      <v-row>
  <v-card-title style="font-size: 1rem;" class="pa-1">{{ writer.nickName }}</v-card-title>
      </v-row>
      <v-row>
      <v-card-subtitle class="pa-0">{{calcDiffTime(createdDate)}}</v-card-subtitle>
      </v-row>
    </v-col>
    <v-col></v-col>
  </v-row>
</div>
</template>

<script>
import {calcDiffTime} from "@/utility/dateCalc/dateCalc";

export default {
  name: "AccountBadgeComp",
  methods: {calcDiffTime},
  props:{writer:{
    profileImage:String,
      nickName: String,
      accountId: Number,
    },
    createdDate:Date},

}
</script>

<style scoped>

</style>