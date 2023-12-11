import type { RoomResponse } from '@/services/response'
import { defineStore } from 'pinia'

export const useSaleStore = defineStore('appStoreSales', {
  state: () => ({
    prueba: <string>'',
    dataRoom: <RoomResponse>{}
  })
})