export const products = [
  {
    name: "Nike Air max 97",
    imageUrl: "/shoes.png",
    categoryId: 2,
    price: 14500,
    ticket: "hit",
    brandId: 1,
  },
  {
    name: "Nike Dunk Low Pro SB",
    imageUrl: "/shoes-2.png",
    categoryId: 2,
    price: 23900,
    ticket: "new",
    brandId: 1,
  },
  {
    name: "NIke Air Max Plus Drift ",
    imageUrl: "/shoes-3.png",
    categoryId: 2,
    price: 32900,
    brandId: 1,
  },
  {
    name: "New Balance 1906r Titanium",
    imageUrl: "/shoes-4.png",
    categoryId: 1,
    price: 18900,
    brandId: 5,
  },
];

export const brands = [
  {
    name: "Nike",
  },
  {
    name: "Adidas",
  },
  {
    name: "Jordan",
  },
  {
    name: "Puma",
  },
  {
    name: "New Balance",
  },
  {
    name: "Vans",
  },
  {
    name: "Diadora",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const shoeSizes = [
  {
    name: "37",
    value: "1",
    disabled: false,
  },
  {
    name: "38",
    value: "3",
    disabled: false,
  },
  {
    name: "38,5",
    value: "4",
    disabled: false,
  },
  {
    name: "39",
    value: "5",
    disabled: false,
  },
  {
    name: "40",
    value: "6",
    disabled: false,
  },
  {
    name: "41",
    value: "7",
    disabled: false,
  },
  {
    name: "42",
    value: "8",
    disabled: false,
  },
  {
    name: "43",
    value: "9",
    disabled: false,
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const availableSizeFirst = [
  {
    name: "38",
    value: "3",
    disabled: true,
  },
  {
    name: "39",
    value: "5",
    disabled: true,
  },
  {
    name: "42",
    value: "8",
    disabled: true,
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const categories = [
  {
    name: "Для мужчин",
  },

  {
    name: "Для женщин",
  },
  {
    name: "Сезон",
  },
];
