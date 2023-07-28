import {
  SET_ACCOUNT_ID,
  SET_LOGIN_STATE, SET_NICKNAME, SET_FOLLOW_LIST, SET_PROFILE_IMG, SET_USERTOKEN,
} from "./mutation_types";

export default {
  [SET_LOGIN_STATE](state, receivedData) {
    state.isLogin = receivedData
  },
  [SET_NICKNAME](state, receivedData) {
    state.nickName = receivedData
  },
  [SET_ACCOUNT_ID](state, receivedData) {
    state.accountId = receivedData
  },
  [SET_USERTOKEN](state, receivedData) {
    state.userToken = receivedData
  },
  [SET_PROFILE_IMG](state, receivedData) {
    state.profileImg = receivedData
  },
  [SET_FOLLOW_LIST](state, receivedData) {
    state.followList = receivedData
  }
}