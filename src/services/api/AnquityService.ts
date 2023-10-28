import http from "../http";
import type { AntiquityResponse } from "../response";

export interface IAntiquity {
  getAntiquity: () => Promise<AntiquityResponse> 
}

export class Antiquity implements IAntiquity {
  getAntiquity(): Promise<AntiquityResponse> {
    const route = 'http://localhost:3001/antiquity'
    return http.get(route)
  }
}