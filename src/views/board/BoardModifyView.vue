<template>
<board-modify-comp :board="board"></board-modify-comp>
</template>

<script>
import {mapActions, mapState} from "vuex";
import BoardModifyComp from "@/components/board/BoardModifyComp.vue";
const BoardModule = "BoardModule"
export default {
  name: "BoardModifyView",
  components: {BoardModifyComp},
  props: ['boardId'],
  methods: {
    ...mapActions(BoardModule, ['requestGetBoard'])
  },
  beforeMount() {
    this.requestGetBoard(this.boardId)
  },
  computed: {
    ...mapState(BoardModule, ['board']),
  }
}
</script>

<style scoped>

</style>