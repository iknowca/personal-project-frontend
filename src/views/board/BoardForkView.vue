<script>
import {defineComponent} from 'vue'
import BoardListComp from "@/components/board/BoardListComp.vue";
import {mapActions} from "vuex";
import router from "@/router";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardForkView",
  components: {BoardListComp},
  methods: {
    ...mapActions(BoardModule, ['requestBoardListByForkList']),
    goToWriteView() {
      router.push('/write-view')
    },
  },
  mounted() {
    this.requestBoardListByForkList()
  }
})
</script>

<template>
  <v-container>
    <board-list-comp></board-list-comp>
  </v-container>
</template>

<style scoped>

</style>