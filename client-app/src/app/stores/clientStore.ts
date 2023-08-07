import { makeAutoObservable, runInAction } from 'mobx'
import { Client } from "../models/client"
import agent from "../api/agent"

export default class ClientStore {
  clientRegistry = new Map<string, Client>()
  selectedClient: Client | undefined = undefined
  editMode = false
  loading = false
  loadingInitial = false

  constructor() {
    makeAutoObservable(this)
  }

  get clientsByDate() {
    return Array.from(this.clientRegistry.values()).sort((a, b) =>
      a.createdAt!.getTime() - b.createdAt!.getTime())
  }

  loadClients = async () => {
    this.setLoadingInitial(true)
    try {
      const clients = await agent.Clients.list()
      clients.forEach(client => {
        this.setClient(client)
      })
      this.setLoadingInitial(false)
    } catch (error) {
      console.log(error)
      this.setLoadingInitial(false)
    }
  }

  loadClient = async (id: string) => {
    let client = this.getClient(id)
    if (client) {
      this.selectedClient = client
      return client
    }
    else {

      try {
        client = await agent.Clients.details(id)
        this.setClient(client)
        runInAction(() => this.selectedClient = client)
        this.setLoadingInitial(false)
        return client
      } catch (error) {
        console.log(error)
        this.setLoadingInitial(false)
      }
    }
  }

  private setClient = (client: Client) => {
    client.createdAt = new Date(client.createdAt!)
    this.clientRegistry.set(client.id, client)
  }

  private getClient = (id: string) => {
    return this.clientRegistry.get(id)
  }

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state
  }

  createClient = async (client: Client) => {
    this.loading = true
    client.id = '500',
      client.createdAt = new Date()
    try {
      await agent.Clients.create(client)
      runInAction(() => {
        this.clientRegistry.set(client.id, client)
        this.selectedClient = client
        this.editMode = false
        this.loading = false
      })
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.loading = false
      })
    }
  }

  updateClient = async (client: Client) => {
    this.loading = true
    try {
      await agent.Clients.update(client)
      runInAction(() => {
        this.clientRegistry.set(client.id, client)
        this.selectedClient = client
        this.editMode = false
        this.loading = false
      })
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.loading = false
      })
    }
  }

  deleteClient = async (id: string) => {
    this.loading = true
    try {
      await agent.Clients.delete(id)
      runInAction(() => {
        this.clientRegistry.delete(id)
        this.loading = false
      })
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.loading = false
      })
    }
  }

}