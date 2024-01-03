
import http from "../http";
import type { RestroomResponse } from "../response";

export interface IRestroom {
  getRestroom(): Promise<RestroomResponse>
}

export class Restroom implements IRestroom {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getRestroom(): Promise<RestroomResponse> {
    const route = `${this.url}/restroom`
    return http.get(route)
  }
}