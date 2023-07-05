import axiosSpring from "@/utility/axiosInst";
import {SET_LOGIN_STATE} from "@/store/account/mutation_types";

export default {
  requestLogin(context, payload) {
    return axiosSpring.post("/account/log-in", payload)
      .then((res)=>console.log(res))
      .catch(()=>console.log('error'))
      .then(()=>context.commit(SET_LOGIN_STATE, true))
  }
}