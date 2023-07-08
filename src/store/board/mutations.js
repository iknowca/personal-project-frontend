import {SET_BOARDS} from "@/store/board/mutation_types";

export default {
  [SET_BOARDS](state, receiveData) {
    state.boards = receiveData;
  }
}