"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import useFilters from "../hooks/use-filters";
import { brands } from "@/prisma/constants";
import useBrands from "../hooks/use-brands";
import useQueryFilters from "../hooks/use-query-filters";

type FiltersProps = {
  className?: string;
};

export const Filters = ({ className }: FiltersProps) => {
  // получаем брнеды для фильтрации
  const { brands, loading } = useBrands();

  const filters = useFilters();
  useQueryFilters(filters);

  // Выводим только value и text
  const items = brands.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      {/* <Title text="Фильтрация" size="sm" className="mb-5" /> */}

      {/* Фильтрация по цене с слайдером */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={25000}
            defaultValue={0}
            // value={filters.prices.priceFrom}
            // onChange={(e) =>
            //   filters.setPrices("priceFrom", Number(e.target.value))
            // }
          />
          <Input
            type="number"
            min={100}
            max={25000}
            placeholder="25000"
            // value={filters.prices.priceTo}
            // onChange={(e) =>
            //   filters.setPrices("priceTo", Number(e.target.value))
            // }
          />
        </div>

        {/* Слайдер с двумя ползунками для выбора цены */}

        <RangeSlider
          min={0}
          max={25000}
          step={100}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 25000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Бренды */}
      <CheckboxFiltersGroup
        title={"Пол"}
        className="mb-5"
        // loading={loading}
        // selectedIds={filters.sizes}
        items={[
          { text: "мужской", value: "man" },
          { text: "женский", value: "woman" },
        ]}
        defaultItems={[]}
        // onClickCheckbox={filters.setSizes}
      />

      {/* Фильтрация по брендам */}
      <CheckboxFiltersGroup
        title={"Бренд"}
        className="mt-5"
        limit={5}
        loading={loading}
        defaultItems={items.slice(0, 4)}
        items={items}
        onClickCheckbox={filters.setselectedBrands}
        selectedIds={filters.selectedBrands}
      />
    </div>
  );
};
