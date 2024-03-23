import type { AxiosResponse } from 'axios'
import http from '../http'
import type { CommerceResponse } from '../response'
import type { CommerceRequest } from '../request'

export interface ICommerce {

  getCommerce: (
    names?: string,
    contact?: string,
    maill?: string,
    phoneNum?: string,
    typeService?: string,
  ) => Promise<CommerceResponse> 

  sendCommerce: (data: CommerceRequest) => Promise<AxiosResponse<CommerceResponse>> 
  
}

export class Commerce implements ICommerce {
  private url: string

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ''
  }

  getCommerce(
    names?: string,
    contact?: string,
    maill?: string,
    phoneNum?: string,
    typeService?: string,
  ): Promise<CommerceResponse> {
    let route = `${this.url}/filesd/byAllData`;
  
    const queryParams: Record<string, any> = {
      names,
      contact,
      maill,
      phoneNum,
      typeService
    };
  
    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(([_, value]) => value !== undefined)
    );
  
    const queryString = new URLSearchParams(filteredParams).toString();
    if (queryString) {
      route += `?${queryString}`;
    }
  
    return http.get(route);
  }

 
  sendCommerce(data: CommerceRequest): Promise<AxiosResponse<CommerceResponse>> {
    const route = `${this.url}/filesd/uploads`
    return http.post(route, data)
  }
}