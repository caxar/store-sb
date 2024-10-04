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
  className?: string;
};

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn("group relative", className)}>
      <Link href={`/product/${id}`}>
        {/* Картинка товара */}
        <div className="flex justify-center p-6 bg-secondary rounded-3xl h-[360px] bg-sb_white">
          <img className="" src={imageUrl} alt={name} />
        </div>
      </Link>

      {/* Заголовок */}
      <Link href={`/product/${id}`}>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      </Link>

      <hr className="w-[45%] group-hover:border-sb_green transition ease duration-300" />

      {/*  */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-[20px]">
          <div className="text-[19px] ">{FormatCardPrice({ price })} ₽</div>
        </span>
      </div>

      <div className=" absolute top-5 right-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="secondary"
                className="group rounded-full h-[50px] w-[53px] bg-white transition duration-300 ease-in-out hover:bg-sb_green"
              >
                <Heart
                  size={22}
                  className="transition ease duration-300 hover:text-sb_white"
                />
              </Button>
              <TooltipContent>
                <p>В избранное</p>
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
