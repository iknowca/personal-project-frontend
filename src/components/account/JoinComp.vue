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
            <v-card @click="joinWithKakao" class="ma-4">
              <v-img :src="kakaoLoginImg"/>
            </v-card>
          </v-container>
          <v-container style="width:320px;padding: 0;">
            <v-card @click="joinWithGoogle" class="ma-4">
              <v-img :src="googleLoginImg"></v-img>
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
      kakaoLoginImg: require("@/assets/oauth/kakao_login_large_wide.png"),
      googleLoginImg: require("@/assets/oauth/btn_google_signin_light_normal_web@2x.png")
    }
  },
  methods: {
    goToHome() {
      router.push('/')
    },
    async joinWithKakao() {
      window.location.href = await this.requestKakaoLoginToSpring()
    },
    async joinWithGoogle() {
      window.location.href = await this.requestGoogleLoginToSpring()
    },

    ...mapActions('AccountModule', ["requestJoin"]),
    ...mapActions('AuthModule', ["requestKakaoLoginToSpring", "requestGoogleLoginToSpring"])
  },

}
</script>

<style scoped>

</style>