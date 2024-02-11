export interface Cities {
  id: string;
  name: string;
}

export interface Countries {
  id: number
  indicative: string
  nameCountry: string
  nameCity: Cities[]
}


export interface CityResponse {
  continent: string
  country: Countries[]
}