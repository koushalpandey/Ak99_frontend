import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../api/endpoint/api.endpoint";

export const productQueryKeys = {
  detail: (slug) => ["product-detail", slug],
};

export const useProductDetailQuery = (slug) => {
  return useQuery({
    queryKey: productQueryKeys.detail(slug),
    queryFn: () => getProductDetail(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};