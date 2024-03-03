
import type { File } from ".";


export interface CommerceResponse {
    _id:         string;
    files:       File[];
    names:       string;
    contact:     string;
    maill:       string;
    phoneNum:    string;
    typeService: string;
    description: string;
    __v:         number;
}

