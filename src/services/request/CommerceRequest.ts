
export interface Filet {
  originalname: string;
  filename:     string;
  mimetype:     string;
  size:         number;
}

export interface CommerceRequest {
  _id:         string;
  files:       Filet[];
  names:       string;
  contact:     string;
  maill:       string;
  phoneNum:    string;
  typeService: string;
  description: string;
  __v:         number;
}