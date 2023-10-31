import ProductDetails from "./ProductDetails";
import Container from "@/components/Container";
import RatingList from "./RatingList";
import { products } from "@/utils/products";

interface IParams {
    id: string;
}

const page = ({params}: {params: IParams}) => {
  console.log("params", params)

  const product = products.find((item) => item.id === params.id);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product}/>
        <div className="flex flex-col mt-20 gap-5">
          <div>Add rating</div>
          <RatingList product={product} />
        </div>
      </Container>
    </div>
  )
}

export default page