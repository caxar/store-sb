import { cn } from "@/lib/utils";
import { useDebounce, useClickAway } from "react-use";
import { Search } from "lucide-react";
import React, { useRef } from "react";
import { Api } from "../services/api-client";
import { Product } from "@prisma/client";
import Link from "next/link";
import { nanoid } from "nanoid";

type Props = {};

type SearchInputProps = {
  className?: string;
};

export const SearchInput = ({ className }: SearchInputProps) => {
  // Поисковой запрос
  const [searchQuery, setSearchQuery] = React.useState("");

  // Показывать или скрывать скрытй блок поиска товаров
  const [focused, setFocused] = React.useState<boolean>(false);

  const [products, setProducts] = React.useState<Product[]>([]);

  // Закрываем форму поиск и убираем блок затемнения
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.search(searchQuery).then((items) => setProducts(items));
    },
    300,
    [searchQuery]
  );

  const handleClick = () => {
    setFocused(false);
  };

  return (
    <>
      {focused && (
        <div className="fixed h-full w-full top-0 bottom-0 right-0 bg-black/50 z-30"></div>
      )}
      <div
        ref={ref}
        className={cn(
          "flex flex-1 justify-between relative h-[50px] z-30 w-[320px] transition-all ease-linear duration-150",
          focused && "w-[460px]",
          className
        )}
      >
        <Search
          size={22}
          className="absolute top-1/2 translate-y-[-50%] left-4 "
        />
        <input
          className={`outline-none w-full rounded-full pl-[50px] bg-sb_white pr-[20px]`}
          type="text"
          placeholder="Поиск"
          value={searchQuery}
          onFocus={() => setFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-[55px]"
          )}
        >
          {products?.map((item) => (
            <Link
              onClick={handleClick}
              className="flex items-center gap-2 px-3 py-2 hover:bg-sb_white"
              key={nanoid()}
              href={`/product/${item.id}`}
            >
              <div className="h-[45px] w-[45px] flex items-center justify-center">
                <img
                  className="w-full object-contain"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
              <div className="">
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
