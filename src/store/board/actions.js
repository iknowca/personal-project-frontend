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
  requestBoardListWithPage(context, pageable){
    axiosSpring.get('/board/list', {params: pageable})
      .then((res)=> {
        context.commit(SET_BOARDS, res.data)
      })
      .catch(()=>alert('can not read board list'))
  }
  ,
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
  },
  async requestPostReply(context, payload) {
    const {userToken} = context.rootState.AccountModule
    return axiosSpring.post("/board/reply/"+payload.boardId, payload, {headers: {Authorization: userToken}})
      .catch(()=> alert('can not read board or post reply'))
      .then((res)=>{
        console.log(res);
        context.commit(SET_BOARD, res.data);
      })
  },
  requestDeleteReply(context, replyId) {
    const {userToken} = context.rootState.AccountModule
    return axiosSpring.delete("/board/reply", {params: {replyId: replyId}, headers: {Authorization: userToken}})
      .then((res) => {
        context.commit(SET_BOARD, res.data);
      })
  },
  requestPutReply(context, {replyId, content}) {
    const {userToken} = context.rootState.AccountModule
    return axiosSpring.put("/board/reply", {content}, {params: {replyId: replyId}, headers: {Authorization: userToken}})
      .then((res)=> {
        context.commit(SET_BOARD, res.data)
      })
  }
}