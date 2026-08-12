import { create } from "zustand";
import { getUserDetail } from "../../api/endpoint/api.endpoint.js";

const getStoredUserData = () => {
  try {
    const storedData = localStorage.getItem("userDetail");

    return storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error("Error reading user data from localStorage:", error);
    return {};
  }
};

const useDetailStore = create((set) => ({
  Data: getStoredUserData(),
  error: null,

  fetchUserDetailData: async () => {
    set({ error: null });

    try {
      const response = await getUserDetail();

      const userData = response?.data || {};


      set({
        Data: userData,
      });


      localStorage.setItem("userDetail", JSON.stringify(userData));
    } catch (error) {
      set({
        error: error.message || "Something went wrong",
      });
    }
  },


  clearUserDetailData: () => {
    localStorage.removeItem("userDetail");

    set({
      Data: {},
      error: null,
    });
  },
}));

export default useDetailStore;