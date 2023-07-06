import axiosSpring from "@/utility/axiosInst";
import {SET_LOGIN_STATE} from "@/store/account/mutation_types";

export default {
  requestLogin(context, payload) {
    return axiosSpring.post("/account/log-in", payload)
      .catch(()=>console.log('error'))
      .then((res)=>{
        localStorage.setItem('userToken', res.userToken)
        context.commit(SET_LOGIN_STATE, true)
      })
  },
  requestJoin(context, payload) {
    return axiosSpring.post("/account/sign-up", payload)
      .then((res) => {
        localStorage.setItem('userToken', res.userToken)
        context.commit(SET_LOGIN_STATE, true)
      })
      .catch(()=>console.log('error'))
  }
}