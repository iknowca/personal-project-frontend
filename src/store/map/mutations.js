import {SET_CURRENT_AREA, SET_CURRENT_LOCATION} from "@/store/map/mutation_types";

export default {
  [SET_CURRENT_LOCATION](state, receivedData) {
    state.currentLocation = receivedData
  },
  [SET_CURRENT_AREA](state, receivedData) {
    state.currentArea = receivedData
  }
}