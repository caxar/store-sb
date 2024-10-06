import {
  About,
  Container,
  Footer,
  HeaderBanner,
  Social,
  Subscribe,
} from "@/components/shared";
import { ProductGroupList } from "@/components/shared/product-group-list";

export default function Home() {
  return (
    <div className="mt-10">
      <Container>
        {/* Главная страница баннер */}
        <HeaderBanner className="mb-[100px]" />

        {/* Раздел товаров */}
        <ProductGroupList
          className="mb-[100px]"
          title={"Новинки"}
          items={[]}
          categoryId={0}
        />

        {/* Информация о магазине */}

        <About className="mb-[60px]" />

        {/* Социальные сети */}
        <Social className="mb-[60px]" />

        {/* Блок подписаться */}
        <Subscribe className="mb-[80px]" />
      </Container>
    </div>
  );
}
