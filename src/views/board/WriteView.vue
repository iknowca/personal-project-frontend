<template>
  <v-container>
    <v-card class="pa-7">
        <v-select style="width: 200px" :items="area">
        </v-select>
      <v-text-field label="title" v-model="title"></v-text-field>
      <v-textarea label="content" v-model="stringContent"></v-textarea>
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
      area: ['current area', 'home area', 'working area']
    }
  },
  methods: {
    submit() {
      this.requestPostBoard({userToken: localStorage.getItem('userToken'),
      title: this.title,
      stringContent: this.stringContent})
    },
    ...mapActions(BoardModule, ['requestPostBoard']),
    goToHome() {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>