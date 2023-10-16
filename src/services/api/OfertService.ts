import http from "../http"
import type { OferResponse } from "../response"

export interface Ioffer {
  getOfert: () => Promise<OferResponse> 
}

export class Offert implements Ioffer {
  getOfert(): Promise<OferResponse> {
    const route = 'http://localhost:3001/ofert'
    return http.get(route)
  }
}