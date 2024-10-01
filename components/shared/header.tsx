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
    <header className="mt-5">
      <Container>
        <div className="flex items-center justify-between">
          {/* левая часть */}
          <div className="flex items-center gap-8">
            {/* Логотип */}
            <Link href="/">
              <div
                className="flex items-center justify-center bg-sb_green w-[50px] h-[50px]
           rounded-3xl"
              >
                <span className="text-[25px] font-extrabold text-sb_white">
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
              <Button
                variant="secondary"
                className="rounded-full h-[50px] w-[53px]"
              >
                <Heart size={64} />
              </Button>
              <Button
                variant="secondary"
                className="rounded-full h-[50px] w-[53px]"
              >
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
