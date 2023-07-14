<template>
<v-container>fdsa</v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
const BoardModule = "BoardModule"
export default {
  name: "BoardModifyView",
  props: ['boardId'],
  methods: {
    ...mapActions(BoardModule, ['requestGetBoard'])
  },
  beforeMount() {
    this.requestGetBoard(this.boardId)
  },
  computed: {
    ...mapState[BoardModule, ['board']]

  }
}
</script>

<style scoped>

</style>