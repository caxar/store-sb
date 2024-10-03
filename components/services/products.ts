import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";

// Для запроса товаров с api продукты которые через поиск получаю
export const search = async (query: string) => {
  return (
    await axiosInstance.get<Product[]>("/products/search", {
      params: { query },
    })
  ).data;
};
