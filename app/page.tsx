import Banner from "@/components/Banner";
import Container from "@/components/Container";
import ProductCard from "@/components/Products/ProductCard";
import { products } from "@/utils/products";

import { truncateText } from "@/utils/truncateTxt";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <Banner/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard data={product} />
          })}
        </div>
      </Container>
    </div>
  )
}
