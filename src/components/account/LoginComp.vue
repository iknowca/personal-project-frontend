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
            <v-text-field type="text" placeholder="example@naver.com" label="email" v-model="email"></v-text-field>
            <v-text-field type="password" placeholder="알파벳 소문자, 대문자, 숫자, 특수문자를 모두 포함하세요." label="password"
                          v-model="password"></v-text-field>
              <p style="color: red">{{message}}</p>
          </v-container>
          <v-container>
            <v-row>
              <v-col cols="4"></v-col>
              <v-col cols="2">
                <v-btn block @click="goToHome">cancel</v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn block @click="login">submit</v-btn>
              </v-col>
        <v-col cols="4"></v-col>

      </v-row>
  </v-container>
  </v-col>
  </v-row>
  </v-card>
  </v-container>
</template>

<script>
import router from "@/router";
import {mapActions} from "vuex";

const AccountModule = "AccountModule"
export default {
  name: "LoginComp",
  components: {},
  data() {
    return {
      email: 'test3@test.com',
      password: 'test3',
      message: ''
    }
  },
  methods: {
    goToHome() {
      router.push('/')
    },
    login() {
      this.requestLogin({email: this.email, password:this.password})
        .then((res)=> {
          if(res==0) {
            router.push('/')
          } else {
            this.message = 'wrong email or password';
          }
        })
    },
    ...mapActions(AccountModule, ['requestLogin'])
  }
}
</script>

<style scoped>

</style>