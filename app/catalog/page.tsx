import { Container, Filters, Title } from "@/components/shared";
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

type Props = {};

export default function Catalog() {
  return (
    <div className="h-[300px]">
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
      <Container>
        <Title text="Бестселлеры" className="font-bold mb-10" size="xl" />
      </Container>

      {/* Блок сортировки и контента */}

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Товары список */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* Компонент для вывода всех товаров */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
