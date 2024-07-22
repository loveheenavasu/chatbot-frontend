"use client";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
let authToken: string | null;
if (typeof window !== "undefined") {
  authToken = localStorage.getItem("authToken");
}

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = authToken;
    if (token) {
      config.headers["token"] = `Bearer ${token}`;
    }

    config.headers["ngrok-skip-browser-warning"] = true;
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
