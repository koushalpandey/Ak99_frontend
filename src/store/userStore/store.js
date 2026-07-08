import { create } from "zustand";
import { getUserData } from "../../api/endpoint/api.endpoint.js";

const useAuthStore = create((set) => ({
  Data:{},
  error: null,

  fetchUserData: async () => {
    set({  error: null });

    try {
      const response = await getUserData();
      set({
        Data: response?.data?.user,

      });
    } catch (error) {
      set({
        error: error.message || "Something went wrong",
      });
    }
  },
}));

export default useAuthStore;