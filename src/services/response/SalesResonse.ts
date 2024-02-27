export interface File {
  originalname: string;
  filename:     string;
  mimetype:     string;
  size:         number;
}


export interface SalesResponse {
  _id: string
  files: File[];
  ofert: string;
  email: string;
  phone: string;
  parking: string;
  flower: string;
  neighborhood: string;
  country: string;
  city: string;
  property: string;
  stratum: string;
  price: number;
  room: string;
  restroom: string;
  age: string;
  administration: string;
  area: number;
  description: string;
}