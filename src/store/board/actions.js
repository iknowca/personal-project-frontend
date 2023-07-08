import axiosSpring from "@/utility/axiosInst";

export default {
  requestPostBoard(context, payload) {
    axiosSpring.post('/board', payload)
      .catch(()=>alert(payload))
  },
}