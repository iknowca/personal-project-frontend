<template>
<v-container>
  <v-card class="pa-4">
    <v-text-field
        v-model="content"
        append-icon="mdi-send"
        @click:append="postReply"
    ></v-text-field>
  </v-card>
</v-container>
</template>

<script>
import {mapActions} from "vuex";
import router from "@/router";

export default {
  name: "ReplyWriteComp",
  props: {boardId: String},
  data() {
    return {
      content: '',
    }
  },
  methods: {
    ...mapActions("BoardModule", ["requestPostReply"]),
    async postReply() {
      this.requestPostReply({content: this.content, boardId: this.boardId})
        .then(()=> {
          router.push({name: 'BoardView', params: {boardId: this.boardId}})
        })

    }
  }
}
</script>

<style scoped>

</style>