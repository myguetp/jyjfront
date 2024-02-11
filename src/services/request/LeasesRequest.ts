interface Picture {
  name: string
  type: string
}

export interface LeasesRequest {
  ofert: string

  parking: string

  neighborhood: string

  property: string

  country: string

  city: string

  stratum: string

  price: number

  room: string

  restroom: string

  age: string

  administration: string

  area: number

  description: string

  picture: Picture[]
}
