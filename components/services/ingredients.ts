import { Brands, Product } from "@prisma/client";
import { axiosInstance } from "./instance";

// Для запроса товаров с api продукты которые через поиск получаю
export const brandsAll = async () => {
  return (await axiosInstance.get<Brands[]>("/brands")).data;
};
