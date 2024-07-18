import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  axiosInstance.interceptors.request.use(
    (config) => {

      const token = localStorage.getItem('authToken');
      if (token) {

        config.headers['token'] = `Bearer ${token}`;
      }

      config.headers['ngrok-skip-browser-warning'] = true;
      return config;

    },

    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;