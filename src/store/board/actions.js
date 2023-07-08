import axiosSpring from "@/utility/axiosInst";
import {SET_BOARDS} from "@/store/board/mutation_types";

export default {
  requestPostBoard(context, payload) {
    axiosSpring.post('/board', payload)
      .catch(()=>alert(payload))
  },
  requestBoardList(context) {
    axiosSpring.get('/board/boards')
      .then((res)=>{
        context.commit(SET_BOARDS, res.data)
      })
      .catch(()=>alert('can not read boards list'))

  }
}