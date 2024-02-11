import http from "../http";
import type { UserResponse, SalesResponse } from "../response";
import type { SalesRequest } from '../request'
import type { AxiosResponse } from "axios";

export interface IUser {
  getUser: (idUser: string) => Promise<UserResponse>
  sendSalesUser(isUser:string, data: SalesRequest): Promise<AxiosResponse<SalesResponse>>
}

export class User implements IUser {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getUser(idUser: string): Promise<UserResponse> {
    const route = `${this.url}/auth/allUser/${idUser}`
    return http.get(route)
  }

  sendSalesUser(isUser:string, data: SalesRequest): Promise<AxiosResponse<SalesResponse>> {
    const route = `${this.url}/auth/${isUser}/sales`
    return http.post(route, data)
  }

  
}