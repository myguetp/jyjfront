interface File {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
}

export interface SalesRequest {
  ofert: string

  parking: string

  neigborhood: string

  property: string

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
