import { FormatCardPrice } from "@/components/hooks/format-card-price";
import {
  Container,
  GroupTabs,
  GroupVariants,
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

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="mb-10">
      <Container>
        <div className="grid grid-cols-2 justify-between gap-10">
          {/* Картинки */}
          <div className="bg-sb_white rounded-3xl">
            <img src="/shoes-2.png" alt="" />
          </div>

          {/* Информация о товаре */}
          <div className="">
            <Title text="Nike Dunk low SE" className="font-bold" size="xl" />
            <hr className="w-[45%] group-hover:border-sb_green transition ease duration-300"></hr>

            <div className="mt-2 mb-5 text-[20px]">
              {FormatCardPrice({ price: 21413 })} ₽
            </div>

            <Title text="Выберите размер" size="xs" />

            <div className="mb-4">
              <GroupVariants
                className="mt-3"
                items={[
                  { name: "37", value: "1", disabled: false },
                  { name: "37,5", value: "2", disabled: false },
                  { name: "38", value: "3", disabled: false },
                  { name: "38,5", value: "4", disabled: true },
                  { name: "39", value: "5", disabled: false },
                  { name: "40", value: "6", disabled: false },
                  { name: "41", value: "7", disabled: true },
                  { name: "42", value: "8", disabled: false },
                  { name: "43", value: "9", disabled: true },
                ]}
              />
            </div>

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
          <GroupTabs />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
