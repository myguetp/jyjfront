import http from '../http'
import type { LeasesResponse } from '../response'

export interface ILeases {
  getLeases: (stratum?: string,
    room?: string,
    restroom?: string,
    age?: string,
    parking?: string,
    property?: string,
    minPrice?: number,
    maxPrice?: number,
    minArea?: number,
    maxArea?: number) => Promise<LeasesResponse>
}

export class Leases implements ILeases {
  private url: string

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ''
  }

  getLeases(
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
  ): Promise<LeasesResponse> {
    let route = `${this.url}/leases/byAllData`;
  
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
}
