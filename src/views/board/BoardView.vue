<script>
import {defineComponent} from 'vue'
import BoardReadComp from "@/components/board/BoardReadComp.vue";
import {mapActions, mapState} from "vuex";

const BoardModule = 'BoardModule'
const AccountModule = 'AccountModule'
export default defineComponent({
  name: "BoardView",
  components: {BoardReadComp},
  props: ['boardId'],
  methods: {
    ...mapActions(BoardModule, ['requestGetBoard'])
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
      <v-btn>modify</v-btn>
      <v-btn>delete</v-btn>
    </div>
  </div>
</template>

<style scoped>

</style>