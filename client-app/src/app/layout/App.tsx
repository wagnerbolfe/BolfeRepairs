import { observer } from "mobx-react"
import { Outlet } from "react-router-dom"
import { useStore } from "../stores/store"
import { useEffect } from "react"
import LoadingComponent from "./LoadingComponent"

export default observer(function App() {
  const { commonStore, userStore } = useStore()

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded())
    } else {
      commonStore.setAppLoaded()
    }
  }, [commonStore, userStore])

  if (!commonStore.appLoaded) return <LoadingComponent />

  return (
    <>
      <Outlet />
    </>
  )
})
