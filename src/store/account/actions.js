import axiosSpring from "@/utility/axiosInst";
import {SET_LOGIN_STATE} from "@/store/account/mutation_types";

export default {
  requestLogin(context, payload) {
    return axiosSpring.post("/account/log-in", payload)
      .catch(()=>console.log('error'))
      .then((res)=>{
        if(res.data.userToken) {
          localStorage.setItem('userToken', res.data.userToken)
          context.commit(SET_LOGIN_STATE, true)
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