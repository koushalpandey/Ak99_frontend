import { create } from "zustand";
import { getWishList } from "../../api/endpoint/api.endpoint.js";

const useWishListStore = create((set) => ({
  Data: [],
  loading: false,
  error: null,

  fetchWishList: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getWishList();
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

export default useWishListStore;