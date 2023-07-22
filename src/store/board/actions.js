import axiosSpring from "@/utility/axios/axiosInst";
import {SET_BOARD, SET_BOARDS} from "@/store/board/mutation_types";
export default {
  async requestPostBoard(context, payload) {
    return await axiosSpring.post('/board', payload)
      .then(res => {
        return res.data
      })
      .catch(()=>alert(payload))
  },
  requestBoardList(context) {
    axiosSpring.get('/board/list')
      .then((res)=>{
        context.commit(SET_BOARDS, res.data)
      })
      .catch(()=>alert('can not read boards list'))
  },
  requestGetBoard(context, payload) {
    axiosSpring.get('/board/'+payload)
      .then((res)=> {
        console.log(res.data)
        context.commit(SET_BOARD, res.data)
      })
      .catch(()=>alert('can not read board:' + payload))
  },
  requestPutBoard(context, payload) {
    return axiosSpring.put('/board', payload)
      .then((res) => {
        return res.data
      })
      .catch(()=> alert('can not modify board:'))
  },
  requestDeleteBoard(context, boardId) {
    const {userToken} = context.rootState.AccountModule
    return axiosSpring.delete('/board', {params: {boardId: boardId}, headers: {Authorization: userToken, boardId:boardId}})
  },
  requestBoardListByUserId(context, userId) {
    const {userToken} = context.rootState.AccountModule
    return axiosSpring.get('/board/list/'+userId, { headers: {Authorization: userToken}})
      .then((res)=> {
        context.commit(SET_BOARDS, res.data)
      })
  }
}