import type { AxiosResponse } from 'axios'
import http from '../http'
import type { RoomResponse } from '../response'
import type { SalesRequest } from '../request'

export interface ISales {
  getSales: (stratum?: string,
    room?: string,
    restroom?: string,
    age?: string,
    parking?: string,
    property?: string,
    minPrice?: number,
    maxPrice?: number,
    minArea?: number,
    maxArea?: number) => Promise<RoomResponse>

  putSales: (data: SalesRequest) => Promise<AxiosResponse<RoomResponse>>

  sendSales: (data: SalesRequest) => Promise<AxiosResponse<RoomResponse>>
}

export class Sales implements ISales {
  private url: string

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ''
  }

  getSales(
    stratum?: string,
    room?: string,
    restroom?: string,
    age?: string,
    parking?: string,
    property?: string,
    minPrice?: number,
    maxPrice?: number,
    minArea?: number,
    maxArea?: number
  ): Promise<RoomResponse> {
    const route = `${this.url}/sales/byAllData/?stratum=${stratum}&room=${room}&restroom=${restroom}&age=${age}&parking=${parking}&property=${property}&minPrice=${minPrice}&maxPrice=${maxPrice}&minArea=${minArea}&maxArea=${maxArea}`;
    return http.get(route);
  }

  putSales(data: SalesRequest): Promise<AxiosResponse<RoomResponse>> {
    const route = `${this.url}/sales`
    return http.put(route, data)
  }

  sendSales(data: SalesRequest): Promise<AxiosResponse<RoomResponse>> {
    const route = `${this.url}/sales/uploadcrate`
    return http.post(route, data)
  }
}
