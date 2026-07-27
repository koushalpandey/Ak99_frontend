import { useContext } from "react";
import { AuthContext } from "../auth/authProviders/Authprovider.jsx";

export const useAuth = () => useContext(AuthContext);