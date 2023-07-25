<template>
  <v-container>
    <v-card class="pa-7">
      <v-row class="pa-4">
        <v-card>
          <v-card-text>{{ currentArea ? currentArea.dong : " 글을 쓰기 위해서 새로 지역을 가져와주세요." }}</v-card-text>
        </v-card>
        <v-spacer></v-spacer>
        <v-btn :loading="false" text class="pa-0" @click="getCurrentArea">
          <v-card-text>get Location</v-card-text>
        </v-btn>
      </v-row>
      <v-text-field label="title" v-model="title"></v-text-field>
      <v-textarea label="content" v-model="stringContent"></v-textarea>
      <v-file-input multiple v-model="files" @change="previewImage" chips accept="image/png, image/jpg, image/jpeg"/>
      <v-row>
        <v-col v-for="(url, i) in previewImages" :key=i class="xs12 sm6 md4 lg3 xl2 xxl1">
          <v-img :src="url"></v-img>
        </v-col>
      </v-row>
      <v-container>
        <v-row>
          <v-col cols="4"></v-col>
          <v-col cols="2" @click="goToBack" class="center">
            <v-btn>cancel</v-btn>
          </v-col>
          <v-col cols="2" @click="submit">
            <v-btn>submit</v-btn>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import router from "@/router";
import AWS from 'aws-sdk'

const AccountModule = "AccountModule"
const BoardModule = 'BoardModule'

export default {
  name: "BoardWriterComp",
  data() {
    return {
      title: '',
      stringContent: '',
      files: [],
      awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
      awsBucketRegion: process.env.VUE_APP_S3_REGION,
      awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
      s3: null,
      previewImages: [],
    }
  },
  methods: {
    ...mapActions("MapModule", ["getCurrentArea"]),
    async submit() {
      const payload = {
        userToken: this.userToken,
        title: this.title,
        stringContent: this.stringContent,
        files: this.files.map((file) => this.nickName + "-" + file.name),
        currentArea: this.currentArea
      }

      this.s3FileUpload()
      const boardId = await this.requestPostBoard(payload)
      router.push({name: 'BoardView', params: {boardId: boardId}})

    },
    ...mapActions(BoardModule, ['requestPostBoard']),
    goToBack() {
      router.go(-1)
    },
    s3FileUpload() {
      this.s3Config()
      for(let i=0; i<this.files.length; i++) {
        let file = this.files[i];
        this.s3.upload({Key:this.nickName+"-"+file.name, Body: file, ACL:'public-read'}, (err) => {
          if(err) {
            console.log(err)
            return alert("error: " + err)
          }
        })
      }
    },
    s3Config() {
      AWS.config.update({
        region: this.awsBucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: this.awsIdentityPoolId
        })
      })
      this.s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {
          Bucket: this.awsBucketName
        }
      })
    },
    previewImage() {
      this.previewImages = this.files.map((file)=>URL.createObjectURL(file))
    }
  },
  computed: {
    ...mapState(AccountModule, ["nickName", "userToken"]),
    ...mapState("MapModule", ["currentArea"])
  }
}
</script>

<style scoped>

</style>