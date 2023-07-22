<script>
import {defineComponent} from 'vue'
import BoardReadComp from "@/components/board/BoardReadComp.vue";
import {mapActions, mapState} from "vuex";
import router from "@/router";

const BoardModule = 'BoardModule'
const AccountModule = 'AccountModule'
export default defineComponent({
  name: "BoardView",
  components: {BoardReadComp},
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
      router.push('/board-list-view')
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
    <div v-if="board.writer?.id === accountId">
        <v-container>
        <v-row>
        <v-btn @click="goToList">list</v-btn>
<v-spacer></v-spacer>
      <v-btn @click="goToModify">modify</v-btn>
      <v-btn @click="requestDelete">delete</v-btn>
        </v-row>
        </v-container>
    </div>
  </div>
</template>

<style scoped>

</style>