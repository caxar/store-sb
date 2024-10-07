import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

export const SelectedGroup = (props: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[260px] px-4 py-5 bg-sb_white border-0 rounded-full">
        <SelectValue placeholder="Cортировать по..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>цене</SelectLabel> */}
          <SelectItem value="price">по цене</SelectItem>
          <SelectItem value="popular">по популярности</SelectItem>
          <SelectItem value="alphabet"> по алфавиту</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
