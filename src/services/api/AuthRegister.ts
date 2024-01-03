import type { AxiosResponse } from "axios";
import http from "../http";
import type { RegisterRequest } from "../request";

export interface IRegister {
 sendRegister: (data: RegisterRequest) => Promise<AxiosResponse>
}

export class AuthRegister implements IRegister {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  sendRegister(data: RegisterRequest): Promise<AxiosResponse> {
    const route = `${this.url}/auth/register`
    return http.post(route, data)
  }
}