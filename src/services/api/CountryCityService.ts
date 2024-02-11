
import http from "../http";
import type { CityResponse } from "../response";

export interface ICountryCity {
  getCountryCity(): Promise<CityResponse>
}

export class CountryCity implements ICountryCity {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getCountryCity(): Promise<CityResponse> {
    const route = `${this.url}/city`
    return http.get(route)
  }
}