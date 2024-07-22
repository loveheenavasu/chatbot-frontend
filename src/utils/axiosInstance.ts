"use client";
import axios from "axios";
import { getLocalStorageItem } from "./localStorage";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
const authToken = getLocalStorageItem("authToken");

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
