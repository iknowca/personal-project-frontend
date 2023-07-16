<script>
import {defineComponent} from 'vue'
import BoardListComp from "@/components/board/BoardListComp.vue";
import {mapActions} from "vuex";
import router from "@/router";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "UserBoardListView",
  components: {BoardListComp},
    props: ['accountId'],
  methods: {
    ...mapActions(BoardModule, ['requestBoardListByUserId']),
    goToWriteView() {
      router.push('/write-view')
    },
  },
  created() {
    this.requestBoardListByUserId(this.accountId)
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