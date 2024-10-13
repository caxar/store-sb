import { Prisma, PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import {
  brands,
  products,
  categories,
  shoeSizes,
  availableSizeFirst,
} from "./constants";

const prisma = new PrismaClient();

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({ productId }: { productId: number }) => {
  return {
    productId,
    price: randomNumber(190, 600),
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  // Пользователи
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        phone: "79782222222",
        verified: new Date(),
        role: "USER",
        email: "user@mail.ru",
        password: hashSync("111111", 10),
      },
      {
        fullName: "Admin",
        phone: "79781111111",
        verified: new Date(),
        role: "ADMIN",
        email: "admin@mail.ru",
        password: hashSync("111111", 10),
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.brands.createMany({
    data: brands,
  });

  await prisma.sizes.createMany({
    data: shoeSizes,
  });

  // await prisma.availableSizes.createMany({
  //   data: availableSizeFirst,
  // });

  const shoe1 = await prisma.product.create({
    data: {
      name: "Nike Air max 97",
      imageUrl: "/shoes.png",
      categoryId: 2,
      price: 14500,
      ticket: "hit",
      brandId: 1,
      size: {
        connect: shoeSizes,
      },
      // availableSize: {
      //   connect: availableSizeFirst,
      // },
    },
  });

  const shoe2 = await prisma.product.create({
    data: {
      name: "Nike Dunk Low Pro SB",
      imageUrl: "/shoes-2.png",
      categoryId: 2,
      price: 23900,
      ticket: "new",
      brandId: 1,
      size: {
        connect: shoeSizes,
      },
    },
  });
  const shoe3 = await prisma.product.create({
    data: {
      name: "NIke Air Max Plus Drift ",
      imageUrl: "/shoes-3.png",
      categoryId: 2,
      price: 32900,
      brandId: 1,
      size: {
        connect: shoeSizes,
      },
    },
  });
  const shoe4 = await prisma.product.create({
    data: {
      name: "New Balance 1906r Titanium",
      imageUrl: "/shoes-4.png",
      categoryId: 1,
      price: 18900,
      brandId: 5,
      size: {
        connect: shoeSizes,
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: shoe1.id,
        description: `Nike Dunk SB Low x Run The Jewels в сине-розовом цвете-это сотрудничество Nike и хип-хоп-дуэта Run The Jewels.Силуэт Dunk SB Low получил стильный и яркий облик, который заставит вас повернуть головы, куда бы вы ни пошли.Цветовая гамма Blue Pink — абсолютный шедевр. Сочетание ярких синих и ярких розовых акцентов создает поразительный контраст. Верх выполнен из высококачественной замши и кожи, что придает обуви роскошный вид.`,
        gender: "man",
      },
      {
        productId: shoe4.id,
        description: `Верх кроссовок New Balance 1906R Titanium выполнен из сетки титанового цвета. Кроссовки оснащены слоями деталей из TPU на пятке. Язычок украшен вшитыми акцентами из кожи с тисненым логотипом New Balance. Резиновая подошва поддерживает промежуточную подошву ABZORB и вставку SBS в пятке. Кроме того, накладки выполнены из ворсистого рипстопа, а мидсоль изготовлена по технологии N-Ergy. Логотип “N” вышит на обеих боковых сторонах кроссовка, завершая его внешний вид.`,
        gender: "woman",
        imageUrl: [
          "shoes-4.png",
          "shoes-4-dope1.png",
          "shoes-4-dope2.png",
          "shoes-4-dope3.png",
        ],
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  //   await prisma.cartItem.create({
  //     data: {
  //       productItemId: 1,
  //       cartId: 1,
  //       quantity: 2,
  //     },
  //   });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Brands" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "AvailableSize" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Sizes" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
