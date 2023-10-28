import { Antiquity, type IAntiquity } from "./api/AnquityService"
import { Offert, type Ioffer } from "./api/OfertService"
import { PropertyType, type IPropertyType } from "./api/PropertyTypeService"
import { Restroom, type IRestroom } from "./api/RestroomService"
import { Room, type IRoom } from "./api/RoomService"
import { Stratum, type IStratum } from "./api/StratumService"
import type { AntiquityResponse, OferResponse, RestroomResponse, RoomResponse, StratumResponse } from "./response"

export class Api {
  private isOffer: Ioffer
  private isStratum: IStratum
  private isAntiquity: IAntiquity
  private isPropertyType: IPropertyType
  private isRoom: IRoom
  private isRestroom: IRestroom

  constructor() {
    this.isOffer = new Offert()
    this.isStratum = new Stratum()
    this.isAntiquity = new Antiquity() 
    this.isPropertyType = new PropertyType() 
    this.isRoom = new Room() 
    this.isRestroom = new Restroom() 
 
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

  getRestroom(): Promise<RestroomResponse> {
    return this.isRestroom.getRestroom()
  }
}