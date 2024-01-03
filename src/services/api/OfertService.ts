import http from "../http"
import type { OferResponse } from "../response"

export interface Ioffer {
  getOfert: () => Promise<OferResponse> 
}

export class Offert implements Ioffer {
  private url: string;

  constructor() {
    this.url =import.meta.env.VITE_APP_SERVICE_URL || ""
  }
  getOfert(): Promise<OferResponse> {
    const route = `${this.url}/ofert`
    return http.get(route)
  }
}