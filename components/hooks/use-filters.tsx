import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface QueryFilters extends PriceProps {
  gender: string;
  sizes: string;
  brands: string;
}

export interface Filters {
  sizes: Set<string>;
  gender: Set<string>;
  selectedBrands: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setGender: (value: string) => void;
  setSizes: (value: string) => void;
  setselectedBrands: (value: string) => void;
}

const useFilters = (): ReturnProps => {
  // Типизируем и отлавливаем данные из url что бы при рендере сохранить выбранные фильтры
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  // Сохранение значений выранных checkbox
  const [selectedBrands, { toggle: toggleBrands }] = useSet(
    new Set<string>(searchParams.get("brands")?.split(","))
  );

  // Сохранение значений выранных checkbox Размеры пиццы
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  // Сохранение значений выранных checkbox по полу
  const [gender, { toggle: toggleGender }] = useSet(
    new Set<string>(
      searchParams.get("gender") ? searchParams.get("gender")?.split(",") : []
    )
  );

  // Данные из range slider цены фром до ту
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  // Функция изменения чисел цены priceFrom дл priceTo

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    gender,
    selectedBrands,
    prices,
    setPrices: updatePrice,
    setGender: toggleGender,
    setSizes: toggleSizes,
    setselectedBrands: toggleBrands,
  };
};

export default useFilters;
