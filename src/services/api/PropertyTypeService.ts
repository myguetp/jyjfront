import http from "../http";
import type { PropertyTypeResponse } from "../response";

export interface IPropertyType {
  getPropertyType: () => Promise<PropertyTypeResponse> 
}

export class PropertyType implements IPropertyType {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }
  getPropertyType(): Promise<PropertyTypeResponse> {
    const route = `${this.url}/Property-Type`
    return http.get(route)
  }
}