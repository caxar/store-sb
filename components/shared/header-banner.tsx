import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";

import shoeImage from "@/app/shoe-banner.png";
import Image from "next/image";
import { Button } from "../ui/button";

type HeaderBannerProps = {
  className?: string;
};

export const HeaderBanner = ({ className }: HeaderBannerProps) => {
  return (
    <div
      className={cn(
        "bg-sb_white h-[750px] rounded-3xl relative flex items-center justify-center ",
        className
      )}
    >
      <div className="absolute w-[47%] left-0 top-0 bg-white pb-5 pr-5 rounded-br-3xl">
        <Title
          className="text-[60px] font-shantell font-bold leading-[60px] mb-5"
          text="Эксклюзивные кроссовки для вас"
        />
        <div className="text-gray-400 ">
          Взгляните на наш широкий ассортимент кроссовок, созданных для того,
          чтобы подчеркнуть ваши индивидуальный стиль
        </div>
      </div>

      <div className="mt-10">
        <Image src={shoeImage} alt="nike" className="w-[90%]" />
      </div>

      <div className="absolute bottom-0 right-0 bg-white py-3 px-3 rounded-tl-3xl">
        <Button className="bg-sb_green w-[165px] py-4 rounded-full text-[17px]">
          Каталог
        </Button>
      </div>
    </div>
  );
};
