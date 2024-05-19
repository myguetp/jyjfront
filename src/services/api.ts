import type { AxiosResponse } from "axios"
import { Antiquity, type IAntiquity } from "./api/AnquityService"
import { Offert, type Ioffer } from "./api/OfertService"
import { PropertyType, type IPropertyType } from "./api/PropertyTypeService"
import { Restroom, type IRestroom } from "./api/RestroomService"
import { Room, type IRoom } from "./api/RoomService"
import { Sales, type ISales } from "./api/SalesService"
import { Stratum, type IStratum } from "./api/StratumService"
import type { AdvertisementResponse, AntiquityResponse, CityResponse, CommerceResponse, LeasesResponse, ListcommerceResponse, OferResponse, ParkingResponse, RestroomResponse, RoomResponse, SalesResponse, StratumResponse, UserResponse } from "./response"
import type { CommerceRequest, LeasesRequest, RegisterRequest, RoomRequest, SalesRequest } from "./request"
import { AuthRegister, type IRegister } from "./api/AuthRegister"
import { Advertisement, type IAdvertisement } from "./api/AdvertisementService"
import { Parking, type IParking } from "./api/ParkingService"
import { Leases, type ILeases } from "./api/LeasesService"
import { User, type IUser } from "./api/UserService"
import { CountryCity, type ICountryCity } from "./api/CountryCityService"
import { Commerce, type ICommerce } from "./api/CommerceService"

export class Api {
  private isAuth: IRegister 
  private isOffer: Ioffer
  private isStratum: IStratum
  private isAntiquity: IAntiquity
  private isPropertyType: IPropertyType
  private isRoom: IRoom
  private isRestroom: IRestroom
  private isSales: ISales
  private isLeases: ILeases
  private isAdvertisement: IAdvertisement
  private isParking: IParking 
  private isUser: IUser 
  private isCountryCity: ICountryCity
  private isCommerce: ICommerce

  constructor() {
    this.isOffer = new Offert()
    this.isStratum = new Stratum()
    this.isAntiquity = new Antiquity() 
    this.isPropertyType = new PropertyType() 
    this.isRoom = new Room() 
    this.isRestroom = new Restroom() 
    this.isSales = new Sales()
    this.isLeases = new Leases()
    this.isAuth = new AuthRegister()
    this.isAdvertisement = new Advertisement()
    this.isParking = new Parking()
    this.isUser = new User()
    this.isCountryCity = new CountryCity()
    this.isCommerce = new Commerce()
 
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

  getSales(stratum?: string,
    room?: string,
    restroom?: string,
    age?: string,
    parking?: string,
    property?: string,
    minPrice?: string,
    maxPrice?: string,
    minArea?: string,
    maxArea?: string): Promise<SalesResponse> {
    return this.isSales.getSales(stratum, room, restroom, age, parking, property, minPrice, maxPrice, minArea, maxArea )
  }

  putSales(request: SalesRequest): Promise<AxiosResponse<SalesResponse>> {
    return this.isSales.putSales(request)
  }

  sendSales(request: SalesRequest): Promise<AxiosResponse<SalesResponse>> {
    return this.isSales.sendSales(request)
  }

  getAdvertisement(): Promise<AdvertisementResponse> {
    return this.isAdvertisement.getAdvertisement()
  }

  getParking(): Promise<ParkingResponse> {
    return this.isParking.getParking()
  }

  getLeases(stratum?: string,
    room?: string,
    restroom?: string,
    age?: string,
    parking?: string,
    property?: string,
    minPrice?: number,
    maxPrice?: number,
    minArea?: number,
    maxArea?: number): Promise<LeasesResponse> {
    return this.isLeases.getLeases(stratum, room, restroom, age, parking, property, minPrice, maxPrice, minArea, maxArea )
  }

  sendLeases(request: LeasesRequest): Promise<AxiosResponse<LeasesResponse>> {
    return this.isLeases.sendLeases(request)
  }

  getUser(idUser: string): Promise<UserResponse> {
    return this.isUser.getUser(idUser)
  }

  sendSalesUser(isUser:string, data: SalesRequest): Promise<AxiosResponse<SalesResponse>> {
    return this.isUser.sendSalesUser(isUser, data)
  }

  getCountryCity(): Promise<CityResponse> {
    return this.isCountryCity.getCountryCity()
  }

  getCommerce(
    names?: string,
    contact?: string,
    maill?: string,
    phoneNum?: string,
    typeService?: string,
  ): Promise<CommerceResponse> {
    return this.isCommerce.getCommerce(   
      names,
      contact,
      maill,
      phoneNum,
      typeService )
  }

  sendCommerce(request: CommerceRequest): Promise<AxiosResponse<CommerceResponse>> {
    return this.isCommerce.sendCommerce(request)
  }

  getCommerces(): Promise<ListcommerceResponse> {
    return this.isCommerce.getCommerces()
  }
}