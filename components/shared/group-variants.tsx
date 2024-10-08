"use client";

import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import React from "react";

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
  className?: string;
};

export const GroupVariants = ({
  className,
  onClick,
  selectedValue,
  items,
}: GroupVariantsProps) => {
  return (
    <div className={cn("flex items-center gap-4 p-1 select-none", className)}>
      {items.map((item) => (
        <button
          key={nanoid()}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center bg-sb_white cursor-pointer w-[80px] py-1 rounded-3xl transition-all duration-300 text-md",
            {
              "bg-red-900": item.value === selectedValue,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
