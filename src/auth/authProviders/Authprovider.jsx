import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api/endpoint/api.endpoint.js";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["me"],
    queryFn: getUserData,
    retry: false,
    enabled: !!localStorage.getItem("token"),
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: isLoading,
        isAuthenticated: !!user,
        refetchUser: refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}