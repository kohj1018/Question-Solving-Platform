import { collection } from "firebase/firestore";
import {db} from "./firebase-config";

const ericaPath = "univ/erica/";

export const usersCollectionRef = collection(db, ericaPath + "users");