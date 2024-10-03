import { Ingredient, Product } from "@prisma/client";
import { axiosInstance } from "./instance";

// Для запроса товаров с api продукты которые через поиск получаю
export const ingredientsALl = async () => {
  return (await axiosInstance.get<Ingredient[]>("/ingredients")).data;
};
