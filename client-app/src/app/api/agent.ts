import axios, { AxiosResponse } from 'axios'
import { Client } from "../models/client";

const spleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.response.use(async response => {
  try {
    await spleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Clients = {
  list: () => requests.get<Client[]>('/clients'),
  details: (id: string) => requests.get<Client>(`/clients/${id}`),
  create: (client: Client) => requests.post<void>('/clients', client),
  update: (client: Client) => requests.put<void>(`/clients/${client.id}`, client),
  delete: (id: string) => requests.del<void>(`/clients/${id}`),
}

const Orders = {
  list: () => requests.get('/orders')
}

const Equipments = {
  list: () => requests.get('/equipments')
}

const agent = {
  Clients, Equipments, Orders
}

export default agent