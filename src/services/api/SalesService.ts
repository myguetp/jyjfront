import type { AxiosResponse } from 'axios'
import http from '../http'
import type { SalesResponse } from '../response'
import type { SalesRequest } from '../request'

export interface ISales {
  getSales: (stratum?: string,
    room?: string,
    restroom?: string,
    age?: string,
    parking?: string,
    property?: string,
    minPrice?: string,
    maxPrice?: string,
    minArea?: string,
    maxArea?: string) => Promise<SalesResponse>

  putSales: (data: SalesRequest) => Promise<AxiosResponse<SalesResponse>>

  sendSales: (data: SalesRequest) => Promise<AxiosResponse<SalesResponse>>
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
    minPrice?: string,
    maxPrice?: string,
    minArea?: string,
    maxArea?: string
  ): Promise<SalesResponse> {
    let route = `${this.url}/sales/byAllData`;
  
    const queryParams: Record<string, any> = {
      stratum,
      room,
      restroom,
      age,
      parking,
      property,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
    };
  
    // Filtrar los parámetros que no tienen valor
    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(([_, value]) => value !== undefined)
    );
  
    // Agregar parámetros a la URL si existen
    const queryString = new URLSearchParams(filteredParams).toString();
    if (queryString) {
      route += `?${queryString}`;
    }
  
    return http.get(route);
  }

  putSales(data: SalesRequest): Promise<AxiosResponse<SalesResponse>> {
    const route = `${this.url}/sales`
    return http.put(route, data)
  }

  sendSales(data: SalesRequest): Promise<AxiosResponse<SalesResponse>> {
    const route = `${this.url}/sales/uploadcrate`
    return http.post(route, data)
  }
}
