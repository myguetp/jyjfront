import type { SalesResponse } from ".";

export interface UserResponse {
  _id:      string;
  name:     string;
  lastName: string;
  city:     string;
  phone:    string;
  email:    string;
  password: string;
  sales:    SalesResponse[];
  __v:      number;
}

