import { create } from "zustand";
import { Orderlist } from "../../../api/endpoint/api.endpoint";


const useOrderListStore = create((set) => ({
  OrderData: [],
  loading: false,
  error: null,

  fetchOrderList: async () => {
    set({ loading: true, error: null });

    try {
      const response = await Orderlist();
      set({
        OrderData: response?.data,
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

export default useOrderListStore;