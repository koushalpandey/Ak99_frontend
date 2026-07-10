import { create } from "zustand";

const useLocationStore = create((set) => ({
  location: null,
  loading: false,
  error: null,

  setLocation: (location) =>
    set({
      location,
      loading: false,
      error: null,
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