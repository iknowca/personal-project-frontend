import {SET_BOARD, SET_BOARDS} from "@/store/board/mutation_types";

export default {
  [SET_BOARDS](state, receiveData) {
    state.boards = receiveData;
  },
  [SET_BOARD](state, receiveData) {
    state.board = receiveData;
  }
}