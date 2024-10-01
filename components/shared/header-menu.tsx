import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const menuList = [
  {
    title: "Каталог",
    link: "/catalog",
  },
  {
    title: "О нас",
    link: "/about",
  },
  {
    title: "Клиенту",
    link: "/client",
  },
  {
    title: "Контакты",
    link: "/contact",
  },
];

export const HeaderMenu = ({ className }: Props) => {
  return (
    <div className="flex items-center gap-[15px]">
      {menuList.map((item) => (
        <Link
          className="hover:bg-sb_green hover:py-3 px-5 rounded-3xl hover:text-sb_white hover:transition ease-in-out delay-100"
          key={nanoid()}
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
