import http from "../http";
import type { StratumResponse } from "../response";

export interface IStratum {
  getStratum: () => Promise<StratumResponse> 
}

export class Stratum implements IStratum {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getStratum(): Promise<StratumResponse> {
    const route = `${this.url}/Stratum`
    return http.get(route)
  }
}