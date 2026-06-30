import { create } from "zustand";
import { getProductDetail } from "../../api/endpoint/api.endpoint.js";

const useSliderStore = create((set) => ({
  Data: [],
  loading: false,
  error: null,

  fetchSlider: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getProductDetail();
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

export default useSliderStore;