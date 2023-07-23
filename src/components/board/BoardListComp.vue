<script>
import {defineComponent} from 'vue'
import {mapState} from "vuex";
import router from "@/router";
import {calcDiffTime} from "@/utility/dateCalc/dateCalc";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardListComp",
    data() {
      return {
          now: new Date()
      }
    },
  computed: {
    ...mapState(BoardModule, ['boards']),
  },
    methods: {
        calcDiffTime,
        readBoard(boardId) {
          router.push({name: 'BoardView', params: {boardId: boardId}})
        }
    }
})
</script>

<template>
<v-container>
    <v-card>
    <v-list>
        <v-list-item
                v-for="board in this.boards"
                :key="board.id"
                :title="board.title+ (board.numReplys?' ['+board.numReplys+']': '' )"
        :subtitle="board.writer.nickName +' - '+ calcDiffTime(board.createdDate)"
        @click="readBoard(board.id)">
        </v-list-item>
    </v-list>
    </v-card>
</v-container>
</template>

<style scoped>

</style>