import { apiRequest } from "../client/api.client.js";

// Login Funtion
export const googleLoginApi = async (payload) => {
  return await apiRequest({
    url: "/auth/login-google",
    method: "post",
    payload: payload,
  });
};
export const getUserData = async () => {
  return await apiRequest({
    url: "/auth/me",
    method: "get",
    payload: false,
    requiresAuth: true,
  });
};

export const getSlider = async () => {
  return await apiRequest({
    url: `/products/slider`,
    method: "get",
    payload: false,
  });
};

export const categorieseUser = async () => {
  return await apiRequest({
    url: "/products/categories",
    method: "get",
    payload: false,
  });
};

// product details  api
export const getProductDetail = async (slug) => {
  return await apiRequest({
    url: `/products/slug/${slug}`,
    method: "get",
    payload: false,
  });
};

// product list api
export const getProductList = async () => {
  return await apiRequest({
    url: `/products/list`,
    method: "get",
    payload: false,
  });
};

export const submitReviewApi = async (data) => {
  return await apiRequest({
    url: `/review/create`,
    method: "post",
    payload: data,
    requiresAuth: true,
  });
};



export const DashbaordApi = async()=>{
  return await apiRequest({
    url: "/products/dashboard",
    method:"get",
  })
}
export const CategorieProduct = async(slug)=>{
  return await apiRequest({
    url: `/products/categories/${slug}`,
    method:"get",
  })
}