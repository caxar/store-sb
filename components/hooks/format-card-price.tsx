import React from "react";

type Props = {
  price: number;
};

export const FormatCardPrice = ({ price }: Props) => {
  const convertPrice = new Intl.NumberFormat("ru").format(price);
  return convertPrice;
};
