import type { AxiosResponse } from "axios"
import { Antiquity, type IAntiquity } from "./api/AnquityService"
import { Offert, type Ioffer } from "./api/OfertService"
import { PropertyType, type IPropertyType } from "./api/PropertyTypeService"
import { Restroom, type IRestroom } from "./api/RestroomService"
import { Room, type IRoom } from "./api/RoomService"
import { Sales, type ISales } from "./api/SalesSerive"
import { Stratum, type IStratum } from "./api/StratumService"
import type { AdvertisementResponse, AntiquityResponse, OferResponse, RestroomResponse, RoomResponse, StratumResponse } from "./response"
import type { RegisterRequest, RoomRequest, SalesRequest } from "./request"
import { AuthRegister, type IRegister } from "./api/AuthRegister"
import { Advertisement, type IAdvertisement } from "./api/AdvertisementService"

export class Api {
  private isAuth: IRegister 
  private isOffer: Ioffer
  private isStratum: IStratum
  private isAntiquity: IAntiquity
  private isPropertyType: IPropertyType
  private isRoom: IRoom
  private isRestroom: IRestroom
  private isSales: ISales
  private isAdvertisement: IAdvertisement

  constructor() {
    this.isOffer = new Offert()
    this.isStratum = new Stratum()
    this.isAntiquity = new Antiquity() 
    this.isPropertyType = new PropertyType() 
    this.isRoom = new Room() 
    this.isRestroom = new Restroom() 
    this.isSales = new Sales()
    this.isAuth = new AuthRegister()
    this.isAdvertisement = new Advertisement()
 
  }

  sendRegister(request: RegisterRequest): Promise<AxiosResponse> {
    return this.isAuth.sendRegister(request)
  }

  getOfert(): Promise<OferResponse> {
    return this.isOffer.getOfert()
  }

  getStratum(): Promise<StratumResponse> {
    return this.isStratum.getStratum()
  }

  getAntiquity(): Promise<AntiquityResponse> {
    return this.isAntiquity.getAntiquity()
  }

  getPropertyType(): Promise<AntiquityResponse> {
    return this.isPropertyType.getPropertyType()
  }

  getRoom(): Promise<RoomResponse> {
    return this.isRoom.getRoom()
  }

  sendRoom(data: RoomRequest ): Promise<RoomResponse> {
    return this.isRoom.sendRoom(data)
  }

  getRestroom(): Promise<RestroomResponse> {
    return this.isRestroom.getRestroom()
  }

  getSales(): Promise<RoomResponse> {
    return this.isSales.getSales()
  }

  putSales(request: SalesRequest): Promise<AxiosResponse<RoomResponse>> {
    return this.isSales.putSales(request)
  }

  sendSales(request: SalesRequest): Promise<AxiosResponse<RoomResponse>> {
    return this.isSales.sendSales(request)
  }

  getAdvertisement(): Promise<AdvertisementResponse> {
    return this.isAdvertisement.getAdvertisement()
  }

}