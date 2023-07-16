<script>
import {defineComponent} from 'vue'
import {mapActions} from "vuex";
import BoardListComp from "@/components/board/BoardListComp.vue";
import router from "@/router";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardListView",
  components: {BoardListComp},
  methods: {
    ...mapActions(BoardModule, ['requestBoardList']),
      goToWriteView() {
          router.push('/write-view')
      },
  },
  created() {
    this.requestBoardList()
  }
})
</script>

<template>
    <v-container>
        <v-btn @click="goToWriteView">
            WRITE
        </v-btn>
<board-list-comp></board-list-comp>

    </v-container>
</template>

<style scoped>

</style>