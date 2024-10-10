"use client";

import React, { useRef } from "react";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { nanoid } from "nanoid";
import { cn } from "@/lib/utils";

type Props = {
  imageMain: string;
  imageGroup?: string[];
};

export const SliderSingleCard = ({ imageMain, imageGroup }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  const [test, setTest] = React.useState<number>(0);

  const swiperSlider = useSwiperSlide();

  return (
    <>
      <Swiper
        className=""
        spaceBetween={20}
        slidesPerView={1}
        // pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
      >
        <SwiperSlide className="">
          <img src={`${imageMain}`} alt="test" />
        </SwiperSlide>
        {imageGroup &&
          imageGroup.map((item) => (
            <SwiperSlide key={nanoid()} className="">
              {({ isActive }) => (
                <img
                  src={`/${item}`}
                  alt="test1"
                  // className={`${isActive ? "border-2" : ""}`}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>

      {/*  Картинки галерея */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={`${imageMain}`} />
        </SwiperSlide> */}
        {imageGroup &&
          imageGroup.map((item, index) => (
            <SwiperSlide
              key={nanoid()}
              className="cursor-pointer"
              onClick={() => setTest(index)}
            >
              <img
                src={`/${item}`}
                alt="test1"
                className={`${
                  test === index ? "border-2 border-sb_green rounded-3xl" : ""
                } ' `}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
