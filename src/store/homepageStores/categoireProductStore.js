import { create } from "zustand";
import { DashbaordApi } from "../../api/endpoint/api.endpoint.js";

const useCategorieProduct = create((set) => ({
  Electronic: [],
  Testing: [],
  loading: false,
  error: null,

  fetchDashBoardProduct: async () => {
    set({ loading: true, error: null });

    try {
      const response = await DashbaordApi();
      set({
        Electronic: response.data?.electronic,
        Testing: response.data?.testing,
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

export default useCategorieProduct;