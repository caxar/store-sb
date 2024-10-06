import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "../ui/button";

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
        <div className=""></div>
      </Container>
    </div>
  );
};
