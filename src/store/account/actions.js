import {
  SET_LOGIN_STATE,
  SET_NICKNAME,
  SET_ACCOUNT_ID,
  SET_USERTOKEN,
  SET_PROFILE_IMG
} from "@/store/account/mutation_types";
import axiosSpring from "@/utility/axios/axiosInst";

export default {
  setAccountInfo(context, payload) {
    context.commit(SET_LOGIN_STATE, true)
    context.commit(SET_NICKNAME, payload.data.nickName)
    context.commit(SET_ACCOUNT_ID, payload.data.accountId)
    context.commit(SET_USERTOKEN, payload.data.userToken)
    context.commit(SET_PROFILE_IMG, payload.data.profileImgPath)
    console.log(payload.data.profileImgPath)
  },
  requestSetNickNameAndEmail(context, payload) {
    return axiosSpring.post('/account/additional-value', payload, {headers: {Authorization: context.state.userToken}})
      .then((res)=> {
        context.commit(SET_NICKNAME, res.data.nickName)
      })
  }
}