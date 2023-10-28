import http from "../http";
import type { RoomResponse } from "../response";

export interface IRoom {
  getRoom(): Promise<RoomResponse>
}

export class Room implements IRoom {
  getRoom(): Promise<RoomResponse> {
    const route = 'http://localhost:3001/room'
    return http.get(route)
  }
}