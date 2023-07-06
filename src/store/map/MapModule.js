import state from "@/store/map/state";
import actions from "@/store/map/actions";
import mutations from "@/store/map/mutations";


const MapModule = {
  namespaced: true,
  state,
  actions,
  mutations,
}

export default MapModule