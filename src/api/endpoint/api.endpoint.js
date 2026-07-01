import { apiRequest } from "../client/api.client.js";

// Login Funtion
export const googleLoginApi = async (payload) => {
  return await apiRequest({
    url: "user/auth/login-google",
    method: "post",
    payload: payload,
  });
};
export const getUserData = async () => {
  return await apiRequest({
    url: "user/auth/me",
    method: "get",
    payload: false,
    requiresAuth: true,
  });
};

export const getSlider = async () => {
  return await apiRequest({
    url: `user/products/slider`,
    method: "get",
    payload: false,
  });
};

export const categorieseUser = async () => {
  return await apiRequest({
    url: "user/products/categories",
    method: "get",
    payload: false,
  });
};

// product details  api
export const getProductDetail = async (slug) => {
  return await apiRequest({
    url: `user/products/slug/${slug}`,
    method: "get",
    payload: false,
  });
};

// product list api
export const getProductList = async () => {
  return await apiRequest({
    url: `user/products/list`,
    method: "get",
    payload: false,
  });
};
export const AddWishList = async (data) => {
  return await apiRequest({
    url: `user/wishlist/add`,
    method: "post",
    payload: data,
  });
};
export const getWishList = async (data) => {
  return await apiRequest({
    url: `user/wishlist/get`,
    method: "post",
    payload: data,
    requiresAuth: true,
  });
};
