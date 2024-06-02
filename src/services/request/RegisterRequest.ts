// import type { SalesRequest } from "."

export interface RegisterRequest {
  name: string
  lastName: string
  city: string
  phone: string
  email: string
  password: string
  termsConditions: boolean
  // sales: SalesRequest
}