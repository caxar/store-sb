import React from "react";
import { Container } from "./container";
import { Title } from "./title";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

import { carouselItem } from "../constants/carousel-image";
import { nanoid } from "nanoid";

type SocialProps = {
  className?: string;
};

export const Social = ({ className }: SocialProps) => {
  return (
    <div className={className}>
      <Container>
        <div className="flex justify-between items-center mb-10">
          <Title text="Наши социальные сети" className="font-bold" size="xl" />
          <div className="flex gap-5">
            <Link href="/test">
              <Button variant="link">Instagram</Button>
            </Link>
            <Link href="/test">
              <Button variant="link">Telegram</Button>
            </Link>
          </div>
        </div>

        {/* Карусель */}
        <div className="">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {carouselItem.map((item) => (
                //   Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={nanoid()}
                  className="md:basis-1/2 lg:basis-1/3 "
                >
                  {/* <div className=""> */}
                  <Card className="h-[260px] flex items-center justify-center overflow-hidden border-0 rounded-3xl">
                    <CardContent className="w-full h-full p-0">
                      <img
                        src={`${item?.imageUrl}`}
                        className="object-cover h-full w-full"
                        alt="a"
                      />
                    </CardContent>
                  </Card>
                  {/* </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};
