import { Timestamp } from "firebase/firestore";

export interface userTypes {
  name: string;
  nickName: string;
  age: number;
  gender: string;
  email: string;
  phoneNumber: string;
  major: string;
  grade: number;
  createdAt: Timestamp;
}