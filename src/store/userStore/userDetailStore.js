import { create } from "zustand";
import { getUserDetail } from "../../api/endpoint/api.endpoint.js";

const useDetailStore = create((set) => ({
  Data:{},
  error: null,

  fetchUserDetailData: async () => {
    set({  error: null });

    try {
      const response = await getUserDetail();
      set({
        Data: response?.data,

      });
    } catch (error) {
      set({
        error: error.message || "Something went wrong",
      });
    }
  },
}));

export default useDetailStore;