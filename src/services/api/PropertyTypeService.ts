import http from "../http";
import type { PropertyTypeResponse } from "../response";

export interface IPropertyType {
  getPropertyType: () => Promise<PropertyTypeResponse> 
}

export class PropertyType implements IPropertyType {
  getPropertyType(): Promise<PropertyTypeResponse> {
    const route = 'http://localhost:3001/Property-Type'
    return http.get(route)
  }
}