import { create } from "zustand";
import { DashbaordApi } from "../../api/endpoint/api.endpoint.js";

const useDashboardProduct = create((set) => ({
  slider:[],
  categories:[],
  Electronic: [],
  Testing: [],
  loading: false,
  error: null,

  fetchDashBoardProduct: async () => {
    set({ loading: true, error: null });

    try {
      const response = await DashbaordApi();
      set({
        slider:response.data?.sliders,
        categories:response.data?.category,
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

export default useDashboardProduct;