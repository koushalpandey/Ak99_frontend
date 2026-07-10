import { create } from "zustand";

const useLocationStore = create((set) => ({
  location: null,
  address: null,
  loading: false,
  error: null,

  setLocation: (location) =>
    set({
      location,
    }),

  setAddress: (address) =>
    set({
      address,
    }),

  setLoading: (loading) =>
    set({
      loading,
    }),

  setError: (error) =>
    set({
      error,
      loading: false,
    }),
}));

export default useLocationStore;