import { Prisma, PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import { brands, products, categories } from "./constants";

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

  await prisma.product.createMany({
    data: products,
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: 1,
        description: `Nike Dunk SB Low x Run The Jewels в сине-розовом цвете-это сотрудничество Nike и хип-хоп-дуэта Run The Jewels.Силуэт Dunk SB Low получил стильный и яркий облик, который заставит вас повернуть головы, куда бы вы ни пошли.Цветовая гамма Blue Pink — абсолютный шедевр. Сочетание ярких синих и ярких розовых акцентов создает поразительный контраст. Верх выполнен из высококачественной замши и кожи, что придает обуви роскошный вид.`,
        gender: "man",
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
