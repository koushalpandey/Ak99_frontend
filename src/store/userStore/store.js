import { create } from "zustand";

const useAuthStore = create((set) => ({
  userData: null,

  setUserData: (data) =>
    set({
      userData: data,
    }),

  clearUserData: () =>
    set({
      userData: null,
    }),
}));

export default useAuthStore;