"use client";
import { nanoid } from "nanoid";
import React from "react";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

type ProductGroupListProps = {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
};

export const ProductGroupList = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}: ProductGroupListProps) => {
  return (
    <div id={nanoid()} className={className}>
      <div className=" mb-10 flex items-center justify-between">
        <Title text={title} size="xl" className="font-bold" />
        <Link href="/razdel">
          <Button variant="link">Смотреть раздел</Button>
        </Link>
      </div>

      <div
        className={cn("grid grid-cols-3 gap-x-[26px] gap-y-10", listClassName)}
      >
        <ProductCard
          id={0}
          name={"Nike Air max 97"}
          price={14500}
          imageUrl={`/shoes.png`}
        />
        <ProductCard
          id={1}
          name={"Nike Air max 97"}
          price={14500}
          imageUrl={`/shoes.png`}
        />
        <ProductCard
          id={2}
          name={"Nike Air max 97"}
          price={14500}
          imageUrl={`/shoes.png`}
        />
        <ProductCard
          id={3}
          name={"Nike Air max 97"}
          price={14500}
          imageUrl={`/shoes.png`}
        />
      </div>
    </div>
  );
};
