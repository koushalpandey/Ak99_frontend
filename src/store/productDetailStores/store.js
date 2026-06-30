import { create } from "zustand";
import { getProductDetail } from "../../api/endpoint/api.endpoint.js";

const useProductDetailStore = create((set) => ({
  Data: [],
  loading: false,
  error: null,

  fetchProductDetail: async (slug) => {
    set({ loading: true, error: null });

    try {
      const response = await getProductDetail(slug);
      set({
        Data: response.data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message || "Something went wrong",
        loading: false,
      });
    }
  },
}));

export default useProductDetailStore;