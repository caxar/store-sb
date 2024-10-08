"use client";

import React from "react";
import {
  FilterChecboxProps,
  FilterCheckbox,
} from "@/components/shared/filter-checkbox";
import { Input } from "../ui/input";
import { nanoid } from "nanoid";
import { Skeleton } from "../ui/skeleton";
import { useSet } from "react-use";
import { cn } from "@/lib/utils";

type Item = FilterChecboxProps;

type CheckboxFiltersGroupProps = {
  title: string;
  items: Item[];
  loading?: boolean;
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  selectedIds?: Set<string>;
  defaultValue?: string[];
  className?: string;
};

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  loading,
  searchInputPlaceholder = "Поиск...",
  onClickCheckbox,
  selectedIds,
  defaultValue,
  className,
}: CheckboxFiltersGroupProps) => {
  // Показывать или скрывать поиск по ингредиентам
  const [showAll, setShowAll] = React.useState(false);

  // Отвечает за поиск
  const [searchValue, setSearchValue] = React.useState("");

  // Показывать кол-во в зависимости от
  const itemsList = showAll
    ? items?.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items.slice(0, limit);

  // Функция поиска обработка текста в input
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // Показывать loading при загрузке ингредиентов

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...[...new Array(limit)].map((_, index) => (
          <Skeleton key={nanoid()} className="h-6 mb-4 rounded-[8px]" />
        ))}
        <Skeleton className="h-6 w-[130px] rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className={cn("bg-sb_white pt-3 pb-5 px-4 rounded-2xl ", className)}>
      <p className=" mb-3">{title}</p>

      {/*  Поле поиска ингредиентов */}
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-white border-none"
          />
        </div>
      )}

      {/* Вывод всех checkbox для фильтрации */}
      <div
        className={`flex flex-col gap-3 max-h-96 pr-2 ${
          showAll && "overflow-auto"
        }`}
      >
        {itemsList.map((item, index) => (
          <FilterCheckbox
            key={nanoid()}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>

      {/* Кнопка показать ещё */}
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать всё"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckboxFiltersGroup;
