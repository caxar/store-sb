"use client";

import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { HeaderMenu } from "./header-menu";
import { Button } from "../ui/button";
import { Ghost, Heart, ShoppingCart } from "lucide-react";
import { SearchInput } from "./search-input";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="py-4 mb-10 sticky top-0 bg-white z-10">
      <Container>
        <div className="flex items-center justify-between">
          {/* левая часть */}
          <div className="flex items-center gap-8">
            {/* Логотип */}
            <Logo />
            {/* меню */}
            <div className="">
              <HeaderMenu />
            </div>
          </div>

          {/* правая часть */}
          <div className="flex items-center gap-5">
            {/* Поиск */}
            <div className="">
              <SearchInput />
            </div>

            {/* Кнопки управления */}
            <div className="flex items-center gap-5">
              <Link href="/fav">
                <Button
                  variant="secondary"
                  className="group rounded-full h-[50px] w-[53px] relative transition duration-300 ease-in-out "
                >
                  <Heart
                    size={22}
                    className="group-hover:text-sb_green group-hover:scale-110"
                  />
                  <div className="absolute flex items-center justify-center bg-sb_green w-[23px] h-[23px] rounded-full text-sb_white text-[14px] bottom-[-8px] right-[0px]">
                    34
                  </div>
                </Button>
              </Link>

              <Link href="/cart">
                <Button
                  variant="secondary"
                  className="group rounded-full h-[50px] w-[53px] transition duration-300 ease-in-out "
                >
                  <ShoppingCart
                    size={22}
                    className="group-hover:text-sb_green group-hover:scale-110"
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
