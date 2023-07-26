<script>
import {defineComponent} from 'vue'
import BoardReadComp from "@/components/board/BoardReadComp.vue";
import {mapActions, mapState} from "vuex";
import router from "@/router";
import ReplyWriteComp from "@/components/board/reply/ReplyWriteComp.vue";
import ReplyReadComp from "@/components/board/reply/ReplyReadComp.vue";

const BoardModule = 'BoardModule'
const AccountModule = 'AccountModule'
export default defineComponent({
  name: "BoardView",
  components: {ReplyReadComp, ReplyWriteComp, BoardReadComp},
  props: ['boardId'],
  methods: {
    ...mapActions(BoardModule, ['requestGetBoard', 'requestDeleteBoard']),
    goToModify() {
      router.push({name:'BoardModifyView', boardId:this.boardId})
    },
    requestDelete() {
      this.requestDeleteBoard(this.boardId)
        .then(()=> {
          router.push("/board-list-view")
        })
        .catch(()=>{
          alert("can't delete board")
        })
    },
    goToList() {
      router.go(-1)
    }
  },
  beforeMount() {
    this.requestGetBoard(this.boardId)
  },
  computed: {
    ...mapState(BoardModule, ['board']),
    ...mapState(AccountModule, ['accountId'])
  }
})
</script>

<template>
  <div>
    <board-read-comp :board="board"></board-read-comp>
    <reply-read-comp></reply-read-comp>
    <reply-write-comp :boardId="boardId"></reply-write-comp>
    <div >
        <v-container>
        <v-row>
        <v-btn @click="goToList">list</v-btn>
<v-spacer></v-spacer>
          <div v-if="board.writer?.id === accountId">
      <v-btn @click="goToModify">modify</v-btn>
      <v-btn @click="requestDelete">delete</v-btn>
          </div>
        </v-row>
        </v-container>
    </div>
  </div>
</template>

<style scoped>

</style>