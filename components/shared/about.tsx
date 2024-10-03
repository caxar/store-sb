import React from "react";
import { Container } from "./container";
import { Title } from "./title";

import bannerImage from "@/app/images/about-banner.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight, ShoppingCart } from "lucide-react";

type Props = {
  className?: string;
};

export const About = ({ className }: Props) => {
  return (
    <div>
      <Container>
        <div className="w-[40%]">
          <Title
            text="Добро пожаловать в мир стиля и комфорта!"
            size="xl"
            className="font-bold leading-[45px] mb-10"
          />
        </div>

        <div className="flex justify-between mb-10">
          {/* Левая часть */}
          <div className="text-gray-400 w-[52%] flex flex-col gap-2">
            <p>
              В нашем интернет-магазине вы найдёте широкий ассортимент кроссовок
              от ведущих мировых брендов. Мы стремимся удовлетворить потребности
              самых взыскательных клиентов, предлагая модели для любого
              возраста, вкуса и стиля.
            </p>
            <p>
              Наша коллекция включает в себя классические модели, так и
              последние инновационные разработки. Мы постоянно обновлем
              ассортимент, чтобы предложить вам самые свежие тренды в мире
              кроссовок.
            </p>
          </div>
          {/* Правая часть */}
          <div className="text-gray-400 w-[30%]">
            <p>
              В нашем магазине вы сможете найти кроссовки для занятий спортом,
              прогулок по городу или создания модного образа. Наша команда
              экспертов готова помочь вам выбрать идеальную пару кроссовок,
              учитывая ваши предпочтения и потребности.
            </p>
          </div>
        </div>

        {/* Баннер */}

        <div className="w-full overflow-hidden h-[420px] mb-5 rounded-3xl relative">
          <Image src={bannerImage} className="w-full absolute top-[-200px]" />
        </div>

        {/* Ссылка на карты */}
        <div className="mb-[300px] flex items-center justify-between">
          {/* Левая часть */}
          <div className="">
            <Title
              text="Как с нами связаться"
              size="sm"
              className="font-semibold mb-1"
            />

            <hr className=" group-hover:border-sb_green transition ease duration-300" />

            <p className="text-gray-400 mt-1">И где нас найти на карте</p>
          </div>
          {/* Правая часть */}
          <div className="">
            <Link href="/cart">
              <Button
                variant="secondary"
                className="group rounded-full h-[60px] w-[60px] transition duration-300 ease-in-out hover:bg-sb_green"
              >
                <ChevronRight size={35} className="group-hover:text-sb_white" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
