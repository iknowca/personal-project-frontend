<script>
import {defineComponent} from 'vue';
import axiosSpring from "@/utility/axios/axiosInst";
import {mapActions} from "vuex";
import router from "@/router";
const AccountModule = "AccountModule"
export default defineComponent({
  name: "SetAdditionalInfoView",
  data() {
    return {
      nickName: '',
      nickNameCheck: false,
      email: '',
      emailCheck: false,
      checkboxIcon: ['mdi-decagram-outline', 'mdi-alert-decagram-outline', 'mdi-check-decagram-outline'],
      checkboxIconColor: ['default', 'red', 'green'],
      rules: {
        nickName: value => {
          const nickNamePattern = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/
          return nickNamePattern.test(value) || "두글자 이상, 열글자 이하의 한글 또는 영어 또는 숫자를 사용해주세요."
        },
        email: value => {
          const emailPattern =/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
          return emailPattern.test(value) || "이메일 형식을 맞춰주세요."
        }
      }
    }
  },
  methods: {
    checkDuplicatedNick() {
      axiosSpring.get('/account/check/nickname', {params: {nickname: this.nickName}})
        .then(res => {
          this.nickNameCheck = !res.data
        })
    },
    setNickNameCheckFalse() {
      this.nickNameCheck = false
    },
    setEmailCheckFalse() {
      this.emailCheck = false
    },
    checkDuplicatedEmail() {
      axiosSpring.get('/account/check/email', {params: {email: this.email}})
        .then(res => {
          this.emailCheck = !res.data
        })
    },
      submit() {
        this.requestSetNickNameAndEmail({nickName: this.nickName, email: this.email})
          .then(()=> {
              router.push('/')
          })
      },
      ...mapActions(AccountModule, ['requestSetNickNameAndEmail']),

  },
  computed: {
    checkNickState() {
      if (this.nickName && this.nickNameCheck) {
        return 2
      } else if (this.nickName || this.nickNameCheck) {
        return 1
      } else {
        return 0
      }
    },
    checkEmailState() {
      if (this.email && this.emailCheck) {
        return 2
      } else if (this.email || this.emailCheck) {
        return 1
      } else {
        return 0
      }
    }
  }
})
</script>

<template>
    <v-container>
        <v-card class="pa-8">
            <v-card-text class="text-center">WellCome!</v-card-text>
            <v-card-subtitle class="text-center">처음 방문해 주셨네요.<br>
                앞으로 사용할 닉네임과 이메일 인증이 필요해요.
            </v-card-subtitle>
            <v-text-field
                    label="nick name"
                    hint="두글자 이상, 열글자 이하의 한글 또는 영어 또는 숫자를 사용해주세요."
                    placeholder="부르기 쉬운 닉네임으로 설정해주세요"
                    v-model="nickName"
                    :rules="[rules.nickName]"
                    @change="setNickNameCheckFalse"
            >
                <template v-slot:prepend>
                    <v-icon :color="checkboxIconColor[checkNickState]">
                        {{ checkboxIcon[checkNickState] }}</v-icon>
                </template>
                <template v-slot:append>
                    <v-btn @click="checkDuplicatedNick"
                           class="pa-0 text-center"
                           min-width="180px"
                    >check nick name
                    </v-btn>
                </template>
            </v-text-field>
            <v-text-field
                    label="email"
                    placeholder="example@gmail.com"
                    v-model="email"
                    :rules="[rules.email]"
                    @change="setEmailCheckFalse"
            >
                <template v-slot:prepend>
                    <v-icon :color="checkboxIconColor[checkEmailState]">
                        {{ checkboxIcon[checkEmailState] }}</v-icon>
                </template>
                <template v-slot:append>
                    <v-btn @click="checkDuplicatedEmail"
                           class="pa-0 text-center"
                           min-width="180px">check email
                    </v-btn>
                </template>
            </v-text-field>

            <v-row>
                <v-btn style="margin:auto;" :disabled="(!nickNameCheck)||(!emailCheck)" @click="submit({email:email, nickName:nickName})"> submit</v-btn>
            </v-row>
        </v-card>
    </v-container>
</template>