import { createStore } from 'vuex'
import AccountModule from "@/store/account/AccountModule";
import BoardModule from "@/store/board/BoardModule";

export default createStore({
  modules: {
    AccountModule: AccountModule,
    BoardModule: BoardModule
  }
})
