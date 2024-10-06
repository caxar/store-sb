import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  AboutLinkItem,
  CataloglinkItem,
  ContactLinkItem,
  ForLinkItem,
} from "../constants/link-footer-item";
import { nanoid } from "nanoid";

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={cn("bg-sb_white py-[50px] px-10", className)}>
      <Container>
        <div className="flex items-center justify-between mb-10">
          <Logo />
          <div className="flex gap-5">
            <Link href="/test">
              <Button variant="link">Instagram</Button>
            </Link>
            <Link href="/test">
              <Button variant="link">Telegram</Button>
            </Link>
          </div>
        </div>

        {/* Разделы сайта */}
        <div className="mb-10 flex justify-between">
          {/* раздел каталог */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Каталог</p>
            {CataloglinkItem.map((item) => (
              <Link
                key={nanoid()}
                className="hover:text-sb_green"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* раздел о нас */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">О нас</p>
            {AboutLinkItem.map((item) => (
              <Link
                key={nanoid()}
                className="hover:text-sb_green"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* раздел для клиента */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Для клиента</p>
            {ForLinkItem.map((item) => (
              <Link
                key={nanoid()}
                className="hover:text-sb_green"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* раздел контакты */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">Контакты</p>
            {ContactLinkItem.map((item) => (
              <Link
                key={nanoid()}
                className="hover:text-sb_green"
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="flex items-center gap-5 text-gray-400">
          <p>© 2024 SB.All Rights Reserved.</p>

          <Link className="hover:text-sb_green" href="/copyright">
            Политика конфиденциальности
          </Link>
        </div>
      </Container>
    </div>
  );
};
