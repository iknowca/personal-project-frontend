<script>
import {defineComponent} from 'vue'
import {mapActions} from "vuex";
import BoardListComp from "@/components/board/BoardListComp.vue";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardListView",
  components: {BoardListComp},
  methods: {
    ...mapActions(BoardModule, ['requestBoardList'])
  },
  created() {
    this.requestBoardList()
  }
})
</script>

<template>
<board-list-comp></board-list-comp>
</template>

<style scoped>

</style>