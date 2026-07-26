import { create } from "zustand";
import { CategorieProduct } from "../../api/endpoint/api.endpoint.js";

const useCategorieProductList = create((set) => ({
  Data: {},
  loading: false,
  error: null,

  fetchCategoriesProductList: async (slug) => {
    set({ loading: true, error: null });

    try {
      const response = await CategorieProduct(slug);
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

export default useCategorieProductList;