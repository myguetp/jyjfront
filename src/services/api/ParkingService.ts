import http from "../http";
import type { ParkingResponse } from "../response";

export interface IParking {
  getParking: () => Promise<ParkingResponse> 
}

export class Parking implements IParking {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getParking(): Promise<ParkingResponse> {
    const route = `${this.url}/parking`
    return http.get(route)
  }
}