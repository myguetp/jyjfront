export interface Cities {
  id: string;
  name: string;
}


export interface CityResponse {
  indicative: string;
  currency: string;
  country: string;
  city: Cities[]
}