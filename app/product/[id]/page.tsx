import { FormatCardPrice } from "@/components/hooks/format-card-price";
import {
  Container,
  GroupTabs,
  GroupVariants,
  SliderSingleCard,
  Subscribe,
  SubscribeForm,
  Title,
} from "@/components/shared";
import { CountButton } from "@/components/shared/count-button";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      items: true,
      size: true,
      availableSizes: true,
    },
  });

  // Если нет продукта то страница 404
  if (!product) {
    return notFound();
  }

  console.log(product);

  const productPrice = product.price;

  return (
    <div className="mb-10">
      <Container>
        <Breadcrumb className="mb-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/catalog">Каталог</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-2 justify-between gap-10 mb-[60px]">
          {/* Картинки */}
          <div className=" rounded-3xl">
            {/* <img src={product.imageUrl} alt="" className="" /> */}
            <SliderSingleCard
              imageMain={product?.imageUrl}
              imageGroup={product?.items[0]?.imageUrl}
            />
          </div>

          {/* Информация о товаре */}
          <div className="sticky top-[100px]">
            <Title text={product?.name} className="font-bold" size="xl" />
            <hr className="w-[45%] group-hover:border-sb_green transition ease duration-300"></hr>

            <div className="mt-2 mb-5 text-[20px]">
              {FormatCardPrice(Number(productPrice))} ₽
            </div>

            <Title text="Выберите размер" size="xs" />

            {/* Выбор размера */}
            <div className="mb-4">
              <GroupVariants
                className="mt-3"
                // items={[
                //   { name: "37", value: "1", disabled: false },
                //   { name: "37,5", value: "2", disabled: false },
                //   { name: "38", value: "3", disabled: false },
                //   { name: "38,5", value: "4", disabled: false },
                //   { name: "39", value: "5", disabled: false },
                //   { name: "40", value: "6", disabled: false },
                //   { name: "41", value: "7", disabled: false },
                //   { name: "42", value: "8", disabled: false },
                //   { name: "43", value: "9", disabled: false },
                // ]}
                items={product?.size}
                // availableSize={product.availableSize}
                availableSize={product.availableSizes}
              />
            </div>

            {/* кнопки количества товара */}
            <CountButton className="mb-5" />

            <div className="flex gap-x-5">
              <Button
                variant="link"
                className="bg-sb_green border-0 text-sb_white py-2"
              >
                Добавить в корзину
              </Button>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      variant="secondary"
                      className="group rounded-full h-[50px] w-[53px] relative transition duration-300 ease-in-out "
                    >
                      <Heart
                        size={22}
                        className="group-hover:text-sb_green group-hover:scale-110"
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

          {/* Табы описания */}
          <GroupTabs descriptionProduct={product?.items[0]?.description} />
        </div>

        {/* Подпись на рассылку */}
        <Subscribe className="mb-[80px]" />
      </Container>
    </div>
  );
};

export default ProductPage;
