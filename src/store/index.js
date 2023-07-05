import { createStore } from 'vuex'
import AccountModule from "@/store/account/AccountModule";

export default createStore({
  modules: {
    AccountModule: AccountModule
  }
})
