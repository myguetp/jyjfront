import http from "../http";
import type { StratumResponse } from "../response";

export interface IStratum {
  getStratum: () => Promise<StratumResponse> 
}

export class Stratum implements IStratum {
  getStratum(): Promise<StratumResponse> {
    const route = 'http://localhost:3001/Stratum'
    return http.get(route)
  }
}