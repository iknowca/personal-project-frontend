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
      <v-card-subtitle class="pa-0">{{calcDiffTime(new Date(createdDate))}}</v-card-subtitle>
      </v-row>
    </v-col>
    <v-spacer></v-spacer>
    <v-col><v-btn @click="requestFollow" class="float-right" variant="Plain">
      follow
      <v-img v-if="isFollow" :src="require('@/assets/follow.png')" width="30px"></v-img>
      <v-img v-else :src="require('@/assets/unfollow.png')" width="30px"></v-img>
    </v-btn></v-col>
  </v-row>
</div>
</template>

<script>
import {calcDiffTime} from "@/utility/dateCalc/dateCalc";
import {mapActions, mapState} from "vuex";

export default {
  name: "AccountBadgeComp",
  methods: {
    calcDiffTime,
    ...mapActions("AccountModule", ["requestFollowCancelToSpring", "requestFollowToSpring","setAccountInfo"]),
    requestFollow() {
      if(this.isFollow) {
        this.requestFollowCancelToSpring(this.writer.id)
          .then((res)=> {
            this.setAccountInfo(res)
          })
      } else {
        this.requestFollowToSpring({followeeUserId: this.writer.id, followerUserId: this.accountId})
          .then((res)=> {
            this.setAccountInfo(res)
          })
      }
    }
  },
  props:{writer:{
    profileImage:String,
      nickName: String,
      id: Number,
    },
    createdDate:String},
  computed: {
    ...mapState("AccountModule", ["accountId", "followList"]),
    isFollow() {
      return this.followList?.includes(this.writer.id);
    }
  }
}
</script>

<style scoped>

</style>