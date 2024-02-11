interface Picture {
  name: string
  type: string
}



export interface SalesResponse {
  _id: string
  ofert: string;
  neighborhood: string;
  city: string;
  country: string;
  property: string;
  stratum: string;
  price: string;
  room: string;
  restroom: string;
  age: string;
  administration: string;
  area: string;
  description: string;
  parking: string;
  picture: Picture[];
}