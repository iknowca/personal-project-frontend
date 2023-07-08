<script>
import {defineComponent} from 'vue'
import {mapState} from "vuex";
import {calcDiffTime} from "../../utility/dateCalc/dateCalc";

const BoardModule = 'BoardModule';
export default defineComponent({
  name: "BoardReadComp",
    methods: {calcDiffTime},
  computed: {
    ...mapState(BoardModule, ['board'])
  },
})
</script>

<template>
    <v-container>
        <v-card>
            <v-card-text class="text-center">{{ board.board?.title}}</v-card-text>
            <v-card-subtitle>{{ board.writer?.nickName}}</v-card-subtitle>
            <v-card-subtitle>
                <v-row>
                    <v-col>{{ calcDiffTime(board.board?.createdDate) }}</v-col>
                    <v-spacer></v-spacer>
                    <v-col>{{ calcDiffTime(board.board?.modifiedDate) }}</v-col>
                </v-row>
            </v-card-subtitle>
            <v-card>{{ board.boardContent }}</v-card>
        </v-card>
    </v-container>
</template>

<style scoped>

</style>