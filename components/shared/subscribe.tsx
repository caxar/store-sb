"use client";

import React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { SubscribeForm } from "./subscribe-form";

type SubscribeProps = {
  className?: string;
};

export const Subscribe = ({ className }: SubscribeProps) => {
  return (
    <div
      className={cn("h-[300px] bg-sb_white rounded-3xl relative", className)}
    >
      <Container>
        <div className="py-10 px-10">
          {/* левая часть */}
          <div className="">
            <Title
              text="Подпишитесь на рассылку"
              size="sm"
              className="font-semibold mb-3"
            />

            <p className="text-gray-400 w-[450px] mb-3">
              Будьте в курсе последних новостей, акций и поставок новых моделей
              кроссовок!
            </p>

            {/* Форма подписки */}
            <SubscribeForm />
          </div>

          {/* Правая */}
          {/* <div className="absolute right-0"> */}
          <img
            className="w-[65%] absolute right-[-8%] top-[-30%]"
            src="/subscribe-shoe.png"
            alt=""
          />
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
};
