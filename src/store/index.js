import { createStore } from 'vuex'
import AccountModule from "@/store/account/AccountModule";
import BoardModule from "@/store/board/BoardModule";
import MapModule from "@/store/map/MapModule";

export default createStore({
  modules: {
    AccountModule: AccountModule,
    BoardModule: BoardModule,
    MapModule: MapModule
  }
})
