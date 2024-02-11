interface Picture {
  name: string
  type: string
}

export interface Sale {
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

export interface UserResponse {
  _id:      string;
  name:     string;
  lastName: string;
  city:     string;
  phone:    string;
  email:    string;
  password: string;
  sales:    Sale[];
  __v:      number;
}

