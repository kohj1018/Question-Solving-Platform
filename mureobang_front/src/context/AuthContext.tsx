import React from "react";
import {userTypes} from "../utils/types";
// import { User } from "@firebase/auth-types";

export const AuthContext = React.createContext<userTypes | null>(null);