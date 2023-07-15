import axiosSpring from "@/utility/axios/axiosInst";
import {SET_LOGIN_STATE, SET_NICKNAME, SET_ACCOUNT_ID, SET_USERTOKEN} from "@/store/account/mutation_types";

export default {
  requestLogin(context, payload) {
    return axiosSpring.post("/account/log-in", payload)
      .catch(()=>console.log('error'))
      .then((res)=>{
        if(res.data.userToken) {
          context.commit(SET_LOGIN_STATE, true)
          context.commit(SET_NICKNAME, res.data.nickName)
          context.commit(SET_ACCOUNT_ID, res.data.accountId)
          context.commit(SET_USERTOKEN, res.data.userToken)
          return 0
        }
        return 1
      })
  },
  requestJoin(context, payload) {
    return axiosSpring.post("/account/sign-up", payload)
      .then((res) => {
        if(res.data.userToken) {
          localStorage.setItem('userToken', res.data.userToken)
          context.commit(SET_LOGIN_STATE, true)
          return 0
        }
        return 1
      })
      .catch(()=>console.log('error'))
  },
  setAccountInfo(context, payload) {
    context.commit(SET_LOGIN_STATE, true)
    context.commit(SET_NICKNAME, payload.data.nickName)
    context.commit(SET_ACCOUNT_ID, payload.data.accountId)
    context.commit(SET_USERTOKEN, payload.data.userToken)
  }
}