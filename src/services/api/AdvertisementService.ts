import http from "../http";
import type { AdvertisementResponse, RoomResponse } from "../response";

export interface IAdvertisement {
  getAdvertisement: () => Promise<RoomResponse>
}

export class Advertisement implements IAdvertisement {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getAdvertisement(): Promise<AdvertisementResponse> {
    const route = `${this.url}/advertisements`
    return http.get(route)
  }


}