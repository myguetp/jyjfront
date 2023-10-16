import { Offert, type Ioffer } from "./api/OfertService"
import { Stratum, type IStratum } from "./api/StratumService"
import type { OferResponse, StratumResponse } from "./response"

export class Api {
  private isOffer: Ioffer
  private isStratum: IStratum
  constructor() {
    this.isOffer = new Offert()
    this.isStratum = new Stratum()
  }

  getOfert(): Promise<OferResponse> {
    return this.isOffer.getOfert()
  }

  getStratum(): Promise<StratumResponse> {
    return this.isStratum.getStratum()
  }
}