<template>
  <v-container>
    <v-card class="pa-4" v-if="board.replys?.length!==0">
      <v-container v-for="reply in board.replys" :key="reply.id">
        <v-text-field
            :prepend-inner-icon="reply.writer.id==accountId ? 'mdi-pencil': ''"
            :append-inner-icon="reply.writer.id==accountId ? 'mdi-comment-remove': ''"
            @click:append-inner="deleteReply(reply.id)"
            @click:prepend-inner="modifyReply(reply.id, reply.content)"
            v-model="reply.content"
        >
        </v-text-field>
<!--        <div>-->
<!--        </div>-->
<!--        <div>-->
<!--          <v-avatar size="20px"><v-img :src="reply.writer.profileImage"></v-img></v-avatar>-->
<!--          {{ reply.writer.nickName }}-->
<!--        </div>-->
        <account-badge-comp :writer="reply.writer" :createdDate="reply.createdDate"></account-badge-comp>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AccountBadgeComp from "@/components/account/AccountBadgeComp.vue";

export default {
  name: "ReplyReadComp",
  components: {AccountBadgeComp},
  computed: {
    ...mapState("BoardModule", ["board"]),
    ...mapState("AccountModule", ["accountId"])
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions("BoardModule", ["requestDeleteReply", "requestPutReply"]),
    deleteReply(replyId) {
      this.requestDeleteReply(replyId)
    },
    modifyReply(replyId, content) {
      this.requestPutReply({replyId, content})
    }
  }
}
</script>

<style scoped>

</style>