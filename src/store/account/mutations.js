import {
  SET_LOGIN_STATE
} from "./mutation_types";

export default {
  [SET_LOGIN_STATE](state, receivedData) {
    state.isLogin = receivedData
  },
}