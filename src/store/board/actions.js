import axiosSpring from "@/utility/axiosInst";

export default {
  requestPutBoard(context, payload) {
    axiosSpring.put('/board/board', payload)
      .then()
      .catch(()=>alert(payload))
  },
}