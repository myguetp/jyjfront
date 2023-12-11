import http from "../http";
import type { RoomResponse } from "../response";

export interface IRoom {
  getRoom(): Promise<RoomResponse>
}

export class Room implements IRoom {
  private url: string;

  constructor() {
    this.url = import.meta.env.VITE_APP_SERVICE_URL || ""
  }

  getRoom(): Promise<RoomResponse> {
    const route = `${this.url}/room`
    return http.get(route)
  }
}