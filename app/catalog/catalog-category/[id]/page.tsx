import { Container, Filters, Title } from "@/components/shared";

export default function Catalog() {
  return (
    <div className="">
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
