interface File {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
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

  picture: File[]
}
