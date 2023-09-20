export interface User {
  username: string
  displayName: string
  token: string
}

export interface UserFormValues {
  password: string
  displayName?: string
  username: string
}