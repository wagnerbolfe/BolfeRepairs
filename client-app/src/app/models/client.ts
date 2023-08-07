export interface Client {
  id: string
  fullName: string
  street: string
  city: string
  neighborhood: string
  uf: string
  phone: string
  mobile: string
  createdAt: Date | null
  details: string
}