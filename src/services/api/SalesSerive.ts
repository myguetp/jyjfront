import type { AxiosResponse } from "axios";
import http from "../http";
import type { RoomResponse } from "../response";
import type { SalesRequest } from "../request";

export interface ISales {
  getSales: () => Promise<RoomResponse> 

  putSales: (data: SalesRequest) => Promise<AxiosResponse<RoomResponse>>

  sendSales: (data: SalesRequest) => Promise<AxiosResponse<RoomResponse>>
}

export class Sales implements ISales {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getSales(): Promise<RoomResponse> {
    const route = `${this.url}/sales`
    return http.get(route)
  }

  putSales(data: SalesRequest): Promise<AxiosResponse<RoomResponse>> {
    const route = `${this.url}/sales`
    return http.put(route, data)
  }

  sendSales(data: SalesRequest): Promise<AxiosResponse<RoomResponse>> {
    const route = `${this.url}/sales/upload`
    return http.post(route, data)
  }
}