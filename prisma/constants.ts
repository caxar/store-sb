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
