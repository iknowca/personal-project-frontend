import state from "@/store/board/state";
import actions from "@/store/board/actions";
import mutations from "@/store/board/mutations";

const BoardModule = {
  namespaced: true,
  state,
  actions,
  mutations,
}

export default BoardModule