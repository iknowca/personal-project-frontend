<script>
import {defineComponent} from 'vue'
import {calcDiffTime} from "../../utility/dateCalc/dateCalc";
import AWS from "aws-sdk";

export default defineComponent({
  name: "BoardReadComp",
  props: {
    board: {}
  },
  data() {
    return {
      awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
      awsBucketRegion: process.env.VUE_APP_S3_REGION,
      awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
      s3: null,
    }
  },
  methods: {
    calcDiffTime,
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
    getS3Files() {
      this.s3Config()
    }
  },
})
</script>

<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-text class="text-center">{{ board?.title }}</v-card-text>
        <v-row>
            <v-col cols="1">
        <v-avatar><v-img :src="board.writer?.profileImage"></v-img></v-avatar>
            </v-col>
            <v-col style="padding-left: 0">
      <v-card-subtitle>{{ board.writer?.nickName }}</v-card-subtitle>
      <v-card-subtitle>
        <v-row>
          <v-col>{{ calcDiffTime(board?.createdDate) }}</v-col>
          <v-spacer></v-spacer>
          <v-col v-if="board.createdDate?.slice(0, 18) !== board?.modifiedDate?.slice(0, 18)">
            modified: {{ calcDiffTime(board?.modifiedDate) }}
          </v-col>
        </v-row>
      </v-card-subtitle>
            </v-col>
        </v-row>

      <v-carousel

          cycle progress show-arrows="hover"
          v-if="!board.content?.imgPathList.length==0"
      >
        <v-carousel-item
            v-for="(img, i) in board.content?.imgPathList" :key=i>
          <v-img min-width="500px" :src="'https://vue-s3-test-37373.s3.ap-northeast-2.amazonaws.com/'+img.imgPath" style="aspect-ratio: auto"></v-img>
        </v-carousel-item>
      </v-carousel>

      <v-card-text>{{ board.content?.stringContent }}</v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>