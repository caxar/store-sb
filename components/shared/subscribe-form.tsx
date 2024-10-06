"use client";

import React, { FormEvent } from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

type Props = {
  className?: string;
};

export const SubscribeForm = ({ className }: Props) => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="">
      <div className="flex gap-3 mb-3">
        <Input
          type="email"
          placeholder="exapmle@mail.ru"
          className="w-[320px] rounded-3xl px-5 py-7 bg-white border-0 active:border-sb_green"
        />
        <Button
          variant="secondary"
          className="group rounded-full h-[55px] w-[55px] transition duration-300 ease-in-out border-2 border-sb_green
        hover:bg-sb_green"
        >
          <ChevronRight
            size={35}
            className="text-sb_black group-hover:text-sb_white"
          />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          id="terms1"
          className="w-[20px] h-[20px] data-[state=checked]:bg-sb_green border-sb_green"
        />
        <label
          htmlFor="terms1"
          className="w-[400px] text-[14px] text-gray-400 cursor-pointer"
        >
          Подписываясь, вы соглашаетесь на обработку данных в соответствии с
          политикой конфиденциальности
        </label>
      </div>
    </form>
  );
};
