import axiosSpring from "@/utility/axios/axiosInst";
import {SET_LOGIN_STATE, SET_NICKNAME} from "@/store/account/mutation_types";

export default {
  requestLogin(context, payload) {
    return axiosSpring.post("/account/log-in", payload)
      .catch(()=>console.log('error'))
      .then((res)=>{
        if(res.data.userToken) {
          localStorage.setItem('userToken', res.data.userToken)
          context.commit(SET_LOGIN_STATE, true)
          context.commit(SET_NICKNAME, res.data.nickName)
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
  }
}