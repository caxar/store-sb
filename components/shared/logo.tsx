import Link from "next/link";
import React from "react";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div
        className="flex items-center justify-center bg-sb_green w-[55px] h-[55px]
           rounded-full"
      >
        <span className="text-[25px] font-bold text-sb_white font-shantell">
          SB
        </span>
      </div>
    </Link>
  );
};
