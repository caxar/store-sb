import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

type Props = {};

type SearchInputProps = {
  className?: string;
};

export const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <div
      className={cn(
        "flex  flex-1 justify-between relative h-[50px] z-30 ",
        className
      )}
    >
      <Search
        size={22}
        className="absolute top-1/2 translate-y-[-50%] left-4 "
      />
      <input
        className=" outline-none w-full rounded-full pl-[50px] bg-sb_white pr-[20px]"
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};
