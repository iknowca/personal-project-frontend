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
            <v-text-field type="text" label="email" v-model="email"></v-text-field>
            <v-text-field type="text" label="nickName" v-model="nickName"></v-text-field>
            <v-text-field type="password" label="password"
                          v-model="password"></v-text-field>
              <p style="color: red">{{this.message}}</p>
          </v-container>
          <v-container>
            <v-row>
              <v-col cols="4"></v-col>
              <v-col cols="2">
                <v-btn block @click="goToHome">cancel</v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn block @click="join">submit</v-btn>
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

// eslint-disable-next-line no-unused-vars
const  AccountModule = 'AccountModule';

export default {
  name: "JoinComp",
  data() {
    return {
      password:'',
      email:'',
      message: '',
      nickName: '',
    }
  },
  methods: {
    join(){
      this.requestJoin({email:this.email, password:this.password, nickName: this.nickName})
        .then((res)=> {
          if(res==0) {
          router.push('/')
        } else {
            this.message='중복된 이메일입니다.'
          }
        })
    },
    goToHome() {
      router.push('/')
    },
    ...mapActions('AccountModule', ["requestJoin"])
  },

}
</script>

<style scoped>

</style>