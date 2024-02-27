
export interface File {
  originalname: string;
  filename:     string;
  mimetype:     string;
  size:         number;
}

export interface CommerceResponse {
    _id:         string;
    files:       File[];
    names:       string;
    contact:     string;
    maill:       string;
    phoneNum:    string;
    typeService: string;
    __v:         number;
}

