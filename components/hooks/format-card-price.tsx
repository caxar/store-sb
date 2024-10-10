import React from "react";

type Props = {
  price: number;
};

export const FormatCardPrice = (price: number) => {
  const convertPrice = new Intl.NumberFormat("ru").format(price);
  return convertPrice;
};
