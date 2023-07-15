import { createStore } from 'vuex'
import AccountModule from "@/store/account/AccountModule";
import BoardModule from "@/store/board/BoardModule";
import MapModule from "@/store/map/MapModule";
import AuthModule from "@/store/auth/AuthModule"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  modules: {
    AccountModule: AccountModule,
    BoardModule: BoardModule,
    MapModule: MapModule,
    AuthModule: AuthModule
  },
  plugins: [
    createPersistedState({paths:['AccountModule']})
  ]
})
