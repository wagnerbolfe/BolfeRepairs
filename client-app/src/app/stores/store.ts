import { createContext, useContext } from "react"
import ClientStore from "./clientStore"
import UserStore from "./userStore"
import CommonStore from "./commonStore"

interface Store {
  clientStore: ClientStore
  commonStore: CommonStore
  userStore: UserStore
}

export const store: Store = {
  clientStore: new ClientStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore()
}

export const StoreContext = createContext(store)

export function useStore() {
  return useContext(StoreContext)
}