// src/store/orderStore.js
import { create } from "zustand";
import { createOrderApi, verifyPaymentApi } from "../../api/endpoint/api.endpoint";

export const useOrderStore = create((set) => ({
  order: null,
  orders: [],
  loading: false,
  error: null,
  paymentStatus: null,

  createOrder: async (payload) => {
    set({ loading: true, error: null });
    try {
      const response = await createOrderApi(payload);
      if (response.success) {
        set({
          order: response.data.order,
          loading: false,
          error: null
        });
        return response;
      } else {
        throw new Error(response.message || "Failed to create order");
      }
    } catch (error) {
      set({
        error: error.message || "Something went wrong",
        loading: false
      });
      return { success: false, message: error.message };
    }
  },

  verifyPayment: async (payload) => {
    set({ loading: true, error: null });
    try {
      const response = await verifyPaymentApi(payload);
      if (response.success) {
        set({
          paymentStatus: "success",
          loading: false,
          error: null
        });
        return response;
      } else {
        throw new Error(response.message || "Payment verification failed");
      }
    } catch (error) {
      set({
        error: error.message || "Payment verification failed",
        loading: false,
        paymentStatus: "failed"
      });
      return { success: false, message: error.message };
    }
  },

  resetOrder: () => {
    set({
      order: null,
      loading: false,
      error: null,
      paymentStatus: null
    });
  },
}));