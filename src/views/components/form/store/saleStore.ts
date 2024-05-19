import type { RoomResponse, SalesResponse } from '@/services/response'
import { defineStore } from 'pinia'


export interface FileObject {
  originalname: string;
  filename: string;
  mimetype: string;
  size: number;
}
export const useSaleStore = defineStore('appStoreSales', {
  state: () => ({
    prueba: <string>'',
    dataRoom: <RoomResponse>{},
    ofert: '' as string,
    neighborhood: '' as string,
    city: '' as string,
    country: '' as string,
    property: '' as string,
    stratum: '' as string,
    price: 0 as number,
    room: '' as string,
    restroom: '' as string,
    age: '' as string,
    administration: '' as string,
    area: 0 as number,
    description: '' as string,
    parking: '' as string,
    allDatasSales: <SalesResponse>{}, 
    files: [] as FileObject[]

  })
})