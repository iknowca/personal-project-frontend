<script>
import {defineComponent} from 'vue'
import router from "@/router";

export default defineComponent({
  name: "MyBoardListButton",
    props: ['accountId'],
    methods: {
        goMyBoardList() {
            router.push( {name: 'UserBoardListView', params: {accountId: this.accountId}})
        }
    },
})
//
</script>

<template>
    <v-card class="ma-10 pa-4 elevation-4" @click="goMyBoardList"><p style="float: left;">My board</p><p style="float: right"> > </p></v-card>

</template>

<style scoped>

</style>