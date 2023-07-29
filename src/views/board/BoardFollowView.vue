<script>
import {defineComponent} from 'vue'
import BoardListComp from "@/components/board/BoardListComp.vue";
import {mapActions} from "vuex";
import router from "@/router";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardFollowView",
  components: {BoardListComp},
  methods: {
    ...mapActions(BoardModule, ['requestBoardListByFollowList']),
    goToWriteView() {
      router.push('/write-view')
    },
  },
  mounted() {
    this.requestBoardListByFollowList()
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