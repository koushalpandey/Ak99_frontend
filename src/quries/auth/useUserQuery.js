import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../api/endpoint/api.endpoint";

export const authQueryKeys = {
  me: ["me"],
};

export const useUserQuery = () => {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: authQueryKeys.me,
    queryFn: getUserData,
    enabled: !!token,
    retry: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
};