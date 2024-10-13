"use client";

import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import React from "react";
import { useSet } from "react-use";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

type GroupVariantsProps = {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant["value"]) => void;
  selectedValue?: Variant["value"];
  availableSize?: Variant[];
  className?: string;
};

export const GroupVariants = ({
  className,
  onClick,
  selectedValue,
  items,
  availableSize,
}: GroupVariantsProps) => {
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>());

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-1 select-none flex-wrap",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={nanoid()}
          onClick={() => toggleSizes?.(item.value)}
          className={cn(
            "flex items-center justify-center bg-sb_white cursor-pointer w-[80px] border-transparent border-2 py-1 rounded-3xl transition-all duration-300 text-md hover:border-2 hover:border-sb_green",
            {
              "bg-sb_green text-sb_white": sizes.has(item.value),
              "text-gray-500 opacity-50 pointer-events-none":
                availableSize?.some(
                  (itm) => itm.value === item.value && itm.disabled
                ),
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
