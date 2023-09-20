import { RouteObject, createBrowserRouter } from 'react-router-dom'
import App from "../layout/App"
import Dashboard from "../../features/dashboard/Dashboard"
import ListClient from "../../features/clients/ListClient"
import LoginForm from "../../features/login/LoginForm"
import FormClient from "../../features/clients/FormClient"
import ListOrders from "../../features/orders/ListOrders"
import FormOrder from "../../features/orders/FormOrder"

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LoginForm /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'clients', element: <ListClient /> },
      { path: 'clients/createClient', element: <FormClient key='create' /> },
      { path: 'clients/editClient/:id', element: <FormClient key="edit" /> },
      { path: 'orders', element: <ListOrders /> },
      { path: 'orders/createOrder', element: <FormOrder key='create' /> },
      { path: 'orders/editOrder/:id', element: <FormOrder key="edit" /> },
    ]
  }
]

export const router = createBrowserRouter(routes)