import { apiRequest } from "../client/api.client.js";

// Login Funtion
export const googleLoginApi = async (payload) => {
  return await apiRequest({
    url: "user/auth/login-google",
    method: "post",
    payload: payload,
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
export const getProductDetail = async (slug) => {
 return await apiRequest({
    url: `user/products/slug/${slug}`,
    method: "get",
    payload: false,
  });
};
