<template>
  <v-btn @click="requestFollow" class="float-right" variant="Plain">
    follow
    <v-img v-if="isFollow" :src="require('@/assets/follow.png')" width="30px"></v-img>
    <v-img v-else :src="require('@/assets/unfollow.png')" width="30px"></v-img>
  </v-btn>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "FollowBtn",
  methods: {
    ...mapActions("AccountModule", ["requestFollowCancelToSpring", "requestFollowToSpring","setAccountInfo"]),
    requestFollow() {
      if(this.isFollow) {
        this.requestFollowCancelToSpring(this.board.writer?.id)
          .then((res)=> {
            this.setAccountInfo(res)
          })
      } else {
        this.requestFollowToSpring({followeeUserId: this.board.writer?.id, followerUserId: this.accountId})
          .then((res)=> {
            this.setAccountInfo(res)
          })
      }
    }
  },
  computed: {
    ...mapState("BoardModule", ["board"]),
    ...mapState("AccountModule", ["accountId", "followList"]),
    isFollow() {
      return this.followList?.includes(this.board.writer?.id);
    }
  }
}
</script>

<style scoped>

</style>