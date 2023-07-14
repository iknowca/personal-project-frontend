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
    ...mapActions(BoardModule, ['requestGetBoard']),
    goToModify() {
      router.push({name:'BoardModifyView', boardId:this.boardId})
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
    <div v-if="board.board?.writer.id === accountId">
      <v-btn @click="goToModify">modify</v-btn>
      <v-btn>delete</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>