import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const normalizeError = {
      message: 
        error?.response?.data?.message 
        || error.message
        || "Something went wrong",
      status: error?.response?.status
    }
    return Promise.reject(normalizeError);
  }
);