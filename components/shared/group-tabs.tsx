import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "./container";
import { TabsCartInfo } from "../constants/tabs-cart-info";
import { nanoid } from "nanoid";

type GroupTabsProps = {
  className?: string;
  descriptionProduct?: string | any;
};

export const GroupTabs = ({
  className,
  descriptionProduct,
}: GroupTabsProps) => {
  return (
    <div className="h-[200px]">
      <Container>
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="bg-transparent flex items-center justify-between mb-5">
            <TabsTrigger
              className="text-[19px] data-[state=active]:border-gray-400 border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:rounded-none hover:text-sb_green"
              value="description"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              className="text-[19px] data-[state=active]:border-gray-400 border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:rounded-none hover:text-sb_green"
              value="delivery"
            >
              Доставка
            </TabsTrigger>
            <TabsTrigger
              className="text-[19px] data-[state=active]:border-gray-400 border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:rounded-none hover:text-sb_green"
              value="payment"
            >
              Оплата
            </TabsTrigger>
            <TabsTrigger
              className="text-[19px]  data-[state=active]:border-gray-400 border-b-2 border-transparent data-[state=active]:shadow-none data-[state=active]:rounded-none hover:text-sb_green"
              value="return"
            >
              Возврат
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            {descriptionProduct
              ? descriptionProduct
              : "Описание пока отсутсвует."}
          </TabsContent>
          <TabsContent value="delivery" className="">
            Доставка осуществляется курьерской службой СДЭК в любой регион
            России и СНГ, в пункт выдачи, прямо к тебе домой или в офис.
          </TabsContent>
          <TabsContent value="payment" className="">
            Оплата принимается банковскими картами: Visa, Mastercard, МИР
          </TabsContent>
          <TabsContent value="return" className="">
            Уверены, что эта инструкция не понадобится, но если что-то пошло не
            так, товар с лёгкостью можно вернуть или обменять при условии
            сохранения тегов подлинности. Сама процедура происходит следующим
            образом: — Для начала сообщи продавцу о сложившейся проблеме. Опиши
            ситуацию в письме и отправь на электронную почту test@mail.ru
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
};
