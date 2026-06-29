import { create } from "zustand";
import { getSlider } from "../api/endpoint/api.endpoint";

const useSliderStore = create((set) => ({
  slider: [],
  loading: false,
  error: null,

  fetchSlider: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getSlider();
      set({
        slider: response.data,
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