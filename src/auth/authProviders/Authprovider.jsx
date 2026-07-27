import { createContext } from "react";
import { useUserQuery } from "../../quries/auth/useUserQuery.js";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const {
    data,
    isLoading,
    refetch,
  } = useUserQuery();

  const user = data?.data;

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