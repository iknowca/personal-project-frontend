<template>
  <v-container>
    <v-card class="pa-7">
      <v-text-field label="title" v-model="title"></v-text-field>
      <v-textarea label="content" v-model="stringContent"></v-textarea>
      <v-container>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="2" @click="goToHome" class="center"><v-btn>cancel</v-btn></v-col>
          <v-col cols="2" @click="submit"><v-btn>submit</v-btn></v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import router from "@/router";
import {mapActions, mapState} from "vuex";
const BoardModule = 'BoardModule'
const AccountModule = 'AccountModule'
export default {
  name: "BoardModifyComp",
  props: {
    board: {}
  },
  data() {
    return {
      title: this.board?.title,
      stringContent: this.board.content?.stringContent,
      area: ['current area', 'home area', 'working area'],
    }
  },
  methods: {
    goToHome() {
      router.push({name:'BoardView', props: {boardId: this.board?.id}})
    },
    async submit() {
      await this.requestPutBoard({title: this.title, stringContent: this.stringContent, boardId: this.board?.id, userToken: this.userToken})
      router.push({name:'BoardView', props: {boardId: this.board?.id}})

    },
    ...mapActions(BoardModule, ['requestPutBoard'])
  },
  computed: {
    ...mapState(AccountModule, ['userToken'])
  }
}
</script>

<style scoped>

</style>