import http from "../http";
import type { AntiquityResponse } from "../response";

export interface IAntiquity {
  getAntiquity: () => Promise<AntiquityResponse> 
}

export class Antiquity implements IAntiquity {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }
  
  getAntiquity(): Promise<AntiquityResponse> {
    const route = `${this.url}/antiquity`
    return http.get(route)
  }
}