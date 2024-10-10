import React from "react";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui/button";
import { Heart, Plus } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FormatCardPrice } from "../hooks/format-card-price";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string | any;
  ticket?: string | null;
  className?: string;
};

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
  ticket,
}: ProductCardProps) => {
  console.log(ticket);
  return (
    <div className={cn(" relative", className)}>
      <div className="group">
        <Link href={`/product/${id}`}>
          {/* Картинка товара */}
          <div className=" flex justify-center p-6 bg-secondary rounded-3xl h-[360px] bg-sb_white">
            <img className="object-contain" src={imageUrl} alt={name} />
          </div>
        </Link>
        {/* Заголовок */}
        <Link href={`/product/${id}`}>
          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        </Link>

        <hr className="w-[45%] group-hover:border-sb_green transition ease duration-300" />
      </div>
      {/*  */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-[20px]">
          <div className="text-[19px] ">{FormatCardPrice(price)} ₽</div>
        </span>
      </div>

      {/* Добавить в избранное */}
      <div className="group absolute top-3 right-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="secondary"
                className="rounded-full h-[50px] w-[53px] bg-white transition duration-300 ease-in-out group-hover:bg-sb_green"
              >
                <Heart
                  size={22}
                  className="transition ease duration-300 group-hover:text-sb_white"
                />
              </Button>
              <TooltipContent>
                <p>В избранное</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Тикет хит */}
      {ticket == "hit" ? (
        <div className="absolute top-3 left-3 flex items-center justify-center bg-sb_green uppercase text-[14px] text-sb_white w-[65px] py-1 rounded-2xl ">
          hit
        </div>
      ) : (
        ""
      )}
      {/* Тикет новинка*/}
      {ticket == "new" ? (
        <div className="absolute top-3 left-3 flex items-center justify-center bg-white uppercase text-[14px] w-[65px] py-1 rounded-2xl ">
          new
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
