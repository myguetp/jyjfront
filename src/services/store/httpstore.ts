import { defineStore } from 'pinia'

export const useHttpStore = defineStore('appStorehttp', {
  state: () => ({
    tokenAuth: '' as string,
    idUser: '' as string,
    useName: '' as string
  })
})