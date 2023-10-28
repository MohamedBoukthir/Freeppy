import ProductDetails from "./ProductDetails";
import Container from "@/components/Container";
import RatingList from "./RatingList";
import { product } from "@/utils/product";

interface IParams {
    productId?: string;
}

const page = ({params}: {params: IParams}) => {
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