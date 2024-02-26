import type { SalesRequest } from "../request";

export interface UserResponse {
  _id:      string;
  name:     string;
  lastName: string;
  city:     string;
  phone:    string;
  email:    string;
  password: string;
  sales:    SalesRequest[];
  __v:      number;
}

