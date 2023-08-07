import { createContext, useContext } from "react"
import ClientStore from "./clientStore"

interface Store {
  clientStore: ClientStore
}

export const store: Store = {
  clientStore: new ClientStore()
}

export const StoreContext = createContext(store)

export function useStore() {
  return useContext(StoreContext)
}