import { create } from "zustand";
import { getProductList } from "../../api/endpoint/api.endpoint.js";

const useProductListStore = create((set) => ({
  Data: [],
  loading: false,
  error: null,

  fetchProductList: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getProductList();
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

export default useProductListStore;