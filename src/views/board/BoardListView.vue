<script>
import {defineComponent} from 'vue'
import {mapActions, mapMutations, mapState} from "vuex";
import BoardListComp from "@/components/board/BoardListComp.vue";
import router from "@/router";

const BoardModule = 'BoardModule'
export default defineComponent({
  name: "BoardListView",
  data() {
    return {
      size: 5,
    }
  },
  components: {BoardListComp},
  methods: {
    ...mapActions(BoardModule, ['requestBoardList', "requestBoardListWithPage"]),
    goToWriteView() {
      router.push('/write-view')
    },
    nextPage() {
      this.SET_PAGE(this.page+1)
      this.requestBoardListWithPage({page: this.page, size: this.size})
    },
    beforePage() {
      this.SET_PAGE(this.page-1)
      this.requestBoardListWithPage({page: this.page, size: this.size})
    },
    ...mapMutations(BoardModule, ['SET_PAGE'])
  },
  created() {
    this.requestBoardListWithPage({page: this.page, size: this.size})
  },
  computed: {
    ...mapState(BoardModule, ['page'])
  }
})
</script>

<template>
  <v-container>
    <v-btn @click="goToWriteView">
      WRITE
    </v-btn>
    <board-list-comp></board-list-comp>
    <v-row>
      <v-btn @click="beforePage" :disabled="page?false:true">{{ "<" }}</v-btn>
      <v-card-title>{{ page }}</v-card-title>
      <v-btn @click="nextPage"> {{ ">" }}</v-btn>

    </v-row>
  </v-container>
</template>

<style scoped>

</style>