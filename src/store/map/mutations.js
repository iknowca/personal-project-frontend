import {
  ADD_MARKER,
  DELETE_ALL_MARKERS,
  SET_CURRENT_AREA,
  SET_CURRENT_LOCATION,
  SET_ZOOM_LEVEL
} from "@/store/map/mutation_types";
import {toRaw} from "vue";

export default {
  [SET_CURRENT_LOCATION](state, receivedData) {
    state.currentLocation = receivedData
  },
  [SET_CURRENT_AREA](state, receivedData) {
    state.currentArea = receivedData
  },
  [SET_ZOOM_LEVEL](state, receivedData) {
    state.zoomLevel=receivedData
  },
  [ADD_MARKER](state, receivedData) {
    state.markers.push(receivedData)
  },
  [DELETE_ALL_MARKERS](state) {
    for(let i=0; i<state.markers.length; i++) {
      toRaw(state.markers[i]).setMap(null)
      state.markers[i]=null

    }
    state.markers = []
  }
}