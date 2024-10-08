import {
  Container,
  Filters,
  ProductCard,
  ProductGroupList,
  SelectedGroup,
  Title,
} from "@/components/shared";
import { BreadCrumbs } from "@/components/shared/";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, StretchHorizontal } from "lucide-react";
import { prisma } from "@/prisma/prisma-client";

export default async function Catalog() {
  // const [columnView, setColumnView] = React.useState<boolean>(false);

  const productsFilter = await prisma.product.findMany({
    include: {},
  });

  return (
    <div className="">
      {/* BreadCrumbs */}
      <Container className="mb-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>

      {/* Заголовок */}
      {/* <Container>
        <Title text="Бестселлеры" className="font-bold mb-10" size="xl" />
      </Container> */}

      {/* Блок сортировки и контента */}

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Товары список */}
          <div className="flex-1">
            {/* отображения контента  */}
            <div className="flex items-center justify-between mb-5">
              <SelectedGroup />

              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  className="group rounded-full h-[50px] w-[53px] relative transition duration-300 ease-in-out "
                >
                  <LayoutDashboard className="group-hover:text-sb_green group-hover:scale-110" />
                </Button>

                <Button
                  variant="secondary"
                  className="group rounded-full h-[50px] w-[53px] relative transition duration-300 ease-in-out "
                >
                  <StretchHorizontal className="group-hover:text-sb_green group-hover:scale-110" />
                </Button>
              </div>
            </div>
            {/* <div className="flex flex-col gap-16"> */}
            <div className="grid grid-cols-3 gap-x-5 gap-y-10">
              {/* Компонент для вывода всех товаров */}
              {productsFilter.map((items) => (
                <ProductCard
                  key={items.id}
                  id={items.id}
                  name={items.name}
                  imageUrl={items.imageUrl}
                  price={Number(items.price)}
                  ticket={items.ticket}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
