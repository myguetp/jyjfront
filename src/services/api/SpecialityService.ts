import http from "../http";
import type { SpecialityResponse } from "../response";

export interface ISpeciality {
  getSpeciality(): Promise<SpecialityResponse>
}

export class Speciality implements ISpeciality {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getSpeciality(): Promise<SpecialityResponse> {
    const route = `${this.url}/speciality`
    return http.get(route)
  }
}