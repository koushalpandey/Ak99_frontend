import { create } from "zustand";
import { categorieseUser } from "../../api/endpoint/api.endpoint.js";

const useCatStore = create((set) => ({
  slider: [],
  loading: false,
  error: null,

  fetchCategorie: async () => {
    set({ loading: true, error: null });

    try {
      const response = await categorieseUser();
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

export default useCatStore;