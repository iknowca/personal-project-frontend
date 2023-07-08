<script>
import {defineComponent} from 'vue'
import BoardReadComp from "@/components/board/BoardReadComp.vue";
import {mapActions} from "vuex";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardView",
  components: {BoardReadComp},
  props: ['boardId'],
  methods: {
    ...mapActions(BoardModule, ['requestGetBoard'])
  },
  beforeMount() {
    this.requestGetBoard(this.boardId)
  }
})
</script>

<template>
    <div>
        <board-read-comp></board-read-comp>
    </div>
</template>

<style scoped>

</style>