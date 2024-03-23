
export interface Filet {
  originalname: string;
  filename:     string;
  mimetype:     string;
  size:         number;
}

export interface CommerceRequest {
  files:       Filet[];
  names:       string;
  contact:     string;
  maill:       string;
  phoneNum:    string;
  typeService: string;
  descripton: string;
}