import { Container, Title } from "@/components/shared";
import React from "react";

type Props = {};

export default async function Cart() {
  return (
    <div>
      <Container>
        <Title text="Корзина" size="xl" className="font-bold mb-10" />
      </Container>
    </div>
  );
}
