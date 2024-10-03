import axios from "axios";

// Экземпляр что бы сделать запросы и получать товары

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
