import {SET_LOGIN_STATE, SET_NICKNAME, SET_ACCOUNT_ID, SET_USERTOKEN} from "@/store/account/mutation_types";

export default {
  setAccountInfo(context, payload) {
    context.commit(SET_LOGIN_STATE, true)
    context.commit(SET_NICKNAME, payload.data.nickName)
    context.commit(SET_ACCOUNT_ID, payload.data.accountId)
    context.commit(SET_USERTOKEN, payload.data.userToken)
  }
}