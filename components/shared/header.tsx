"use client";

import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { HeaderMenu } from "./header-menu";
import { Button } from "../ui/button";
import { Ghost, Heart, ShoppingCart } from "lucide-react";
import { SearchInput } from "./search-input";

export const Header = () => {
  return (
    <header className="py-4 mb-10 sticky top-0 bg-white z-10">
      <Container>
        <div className="flex items-center justify-between">
          {/* левая часть */}
          <div className="flex items-center gap-8">
            {/* Логотип */}
            <Link href="/">
              <div
                className="flex items-center justify-center bg-sb_green w-[60px] h-[60px]
           rounded-full"
              >
                <span className="text-[25px] font-bold text-sb_white font-shantell">
                  SB
                </span>
              </div>
            </Link>
            {/* меню */}
            <div className="">
              <HeaderMenu />
            </div>
          </div>

          {/* правая часть */}
          <div className="flex items-center gap-5">
            {/* Поиск */}
            <div className="w-[300px]">
              <SearchInput />
            </div>

            {/* Кнопки управления */}
            <div className="flex items-center gap-5">
              <Link href="/fav">
                <Button
                  variant="secondary"
                  className="group rounded-full h-[50px] w-[53px] relative transition duration-300 ease-in-out hover:bg-sb_green"
                >
                  <Heart size={22} className="group-hover:text-sb_white" />
                  <div className="absolute flex items-center justify-center bg-sb_green w-[23px] h-[23px] rounded-full text-sb_white text-[14px] bottom-[-8px] right-[0px] group-hover:bg-sb_black">
                    34
                  </div>
                </Button>
              </Link>

              <Link href="/cart">
                <Button
                  variant="secondary"
                  className="group rounded-full h-[50px] w-[53px] transition duration-300 ease-in-out hover:bg-sb_green"
                >
                  <ShoppingCart
                    size={22}
                    className="group-hover:text-sb_white"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
