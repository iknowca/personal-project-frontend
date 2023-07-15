<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col class="align-center">

                    <v-card-title class="text-center">
                        Are you Fine?
                    </v-card-title>
                    <div class="d-flex">
                        <v-img :src='require("@/assets/logo.png")' height="20vh"></v-img>
                    </div>
                    <v-container style="width:320px;padding: 0">
                        <v-card @click="joinWithKakao">
                            <v-card-text class="text-center">KAKAO JOIN</v-card-text>
                        </v-card>
                    </v-container>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import router from "@/router";
import {mapActions} from "vuex";
import env from "../../../env";

// eslint-disable-next-line no-unused-vars
const AccountModule = 'AccountModule';
// eslint-disable-next-line no-unused-vars
const AuthModule = 'AuthModule';

export default {
  name: "JoinComp",
  computed: {
    env() {
      return env
    }
  },
  data() {
    return {
    }
  },
  methods: {
    goToHome() {
      router.push('/')
    },
    async joinWithKakao() {
        window.location.href = await this.requestKakaoLoginToSpring()
    },
    ...mapActions('AccountModule', ["requestJoin"]),
    ...mapActions('AuthModule', ["requestKakaoLoginToSpring"])
  },

}
</script>

<style scoped>

</style>