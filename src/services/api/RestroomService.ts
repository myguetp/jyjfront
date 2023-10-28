
import http from "../http";
import type { RestroomResponse } from "../response";

export interface IRestroom {
  getRestroom(): Promise<RestroomResponse>
}

export class Restroom implements IRestroom {
  getRestroom(): Promise<RestroomResponse> {
    const route = 'http://localhost:3001/restroom'
    return http.get(route)
  }
}