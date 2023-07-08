<script>
import {defineComponent} from 'vue'
import {mapState} from "vuex";

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
      calcDiffTime(createdTime) {
          let timeDiff = this.now - new Date(createdTime)
          let hourDiff = Math.floor(timeDiff/(1000*60*60))
          console.log((0<hourDiff && hourDiff <24))
          if(0<hourDiff  && hourDiff<24) {
              return hourDiff + ' times ago'
          } else if(hourDiff<=0) {
              let minDiff = Math.floor(timeDiff/(1000*60))
              if(minDiff>0) {
                  return minDiff + ' minutes ago';
              } else {
                  return 'just before'
              }
          } else {
              let dayDiff = Math.floor(timeDiff/(1000*60*60*24))
              return dayDiff + ' days ago'
          }
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
                :title="board.title"
        :subtitle="board.writer.nickName +' - '+ calcDiffTime(board.createdDate)">
        </v-list-item>
    </v-list>
    </v-card>
</v-container>
</template>

<style scoped>

</style>