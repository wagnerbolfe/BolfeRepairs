import { RouteObject, createBrowserRouter } from 'react-router-dom'
import App from "../layout/App"
import Dashboard from "../../features/dashboard/Dashboard"
import ListClient from "../../features/clients/ListClient"
import Login from "../../features/login/Login"
import FormClient from "../../features/clients/FormClient"

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'clients', element: <ListClient /> },
      { path: 'clients/createClient', element: <FormClient key='create' /> },
      { path: 'clients/editClient/:id', element: <FormClient key="edit" /> },
    ]
  }
]

export const router = createBrowserRouter(routes)