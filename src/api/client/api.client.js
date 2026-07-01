import api from "../../config/env.js"


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => {

        const token = response?.data?.token;
        if (token) {
            localStorage.setItem("token", token);
        }

        return response;
    },
    (error) => Promise.reject(error)
);


export const apiRequest = async ({
  url,
  method = "GET",
  payload = {},
  params = {},
  headers = {},
  requiresAuth = false,
}) => {
  try {
    const token = localStorage.getItem("token");

    const response = await api({
      url,
      method,
      data: payload,
      params,
      headers: {
        ...(requiresAuth && token
          ? { Authorization: `Bearer ${token}` }
          : {}),
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    throw error?.response?.data || error.message;
  }
};