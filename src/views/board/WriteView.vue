<template>
  <v-container>
    <v-card>
      <v-text-field label="title" v-model="title"></v-text-field>
      <v-text-field label="content" v-model="stringContent"></v-text-field>
      <v-container>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="2" @click="goToHome"><v-btn>cancel</v-btn></v-col>
          <v-col cols="2" @click="submit"><v-btn>submit</v-btn></v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

import {mapActions} from "vuex";
import router from "@/router";

const BoardModule = 'BoardModule'
export default {
  name: "WriteView",
  data() {
    return {
      title: '',
      stringContent: '',
    }
  },
  methods: {
    submit() {
      this.requestPutBoard({userToken: localStorage.getItem('userToken'),
      title: this.title,
      stringContent: this.stringContent})
    },
    ...mapActions(BoardModule, ['requestPutBoard']),
    goToHome() {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>