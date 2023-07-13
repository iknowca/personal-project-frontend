import {
  SET_LOGIN_STATE, SET_NICKNAME
} from "./mutation_types";

export default {
  [SET_LOGIN_STATE](state, receivedData) {
    state.isLogin = receivedData
  },
  [SET_NICKNAME](state, receivedData) {
    state.nickName = receivedData
  }
}