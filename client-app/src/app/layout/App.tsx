import { useEffect } from "react"
import { useStore } from "../stores/store"
import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import LoadingComponent from "./LoadingComponent"

export default observer(function App() {
  const { clientStore } = useStore()

  useEffect(() => {
    clientStore.loadClients()
  }, [clientStore])

  if (clientStore.loadingInitial) return <LoadingComponent />

  return (
    <>
      <Outlet />
    </>
  )
})
