<script>
import {defineComponent} from 'vue'
import {mapState} from "vuex";
import LogoutComp from "@/components/account/LogoutComp.vue";
import MyBoardListButton from "@/components/account/MyBoardListButton.vue";
import ForkBoardListComp from "@/components/account/ForkBoardListComp.vue";
import FolloweeBoardListComp from "@/components/account/FolloweeBoardListComp.vue";

const AccountModule = "AccountModule"
export default defineComponent({
  name: "MyInfoComp",
    components: {FolloweeBoardListComp, ForkBoardListComp, MyBoardListButton, LogoutComp},
  computed: {
    ...mapState(AccountModule, ['profileImg', 'nickName', 'accountId'])
  },
    methods: {

    }
})
</script>

<template>
<v-container class="align-center">
    <v-card>
        <v-card class="ma-10 pa-4 elevation-4">
    <v-avatar size="100px">
        <v-img :src="profileImg">
        </v-img>
    </v-avatar>
            <v-card-title style="float: right">{{nickName}}</v-card-title>
        </v-card>
        <my-board-list-button :account-id="accountId"></my-board-list-button>
        <ForkBoardListComp></ForkBoardListComp>
        <FolloweeBoardListComp></FolloweeBoardListComp>
        <logout-comp></logout-comp>
    </v-card>
</v-container>
</template>

<style scoped>

</style>