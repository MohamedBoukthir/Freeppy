"use client";

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

import SetColor from "@/components/Products/setColor";

// product details props
interface ProductDetailsProps {
    product: any;
}

// cart product type
export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: selectedImgType,
    quantity: number,
    price: number
}

// selected image type
export type selectedImgType = {
    color: string,
    colorCode: string,
    image: string,
}

// the horizontal line component
const HorizontalLine = () => {
    return <hr className="w-[30%] my-2" />
}

// Product Details Page
const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {

    // useState hook
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.desciption,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price
    })


    // Product Rating Func
    const productRating = product.reviews.reduce((acc: number, item: any) =>
    item.rating + acc, 0) / product.reviews.length;

    //handleColorSelect Func
    const handleColorSelect = useCallback(
        (value: selectedImgType) => {
            setCartProduct((prev) => {
                return {...prev, selectedImg: value}
            })
        },
        [cartProduct.selectedImg]
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>images</div>

        <div className="flex flex-col gap-1 text-slate-500 text-sm">
        { /* Product name */ }
            <h2 className="text-3xl font-medium text-slate-700">
                {product.name}
            </h2>
        { /* Rating */ }
            <div className="flex items-center gap-5">
                <Rating value={productRating} readOnly />
                <div> {product.reviews.length} Reviews </div>
            </div>
            <HorizontalLine/>
        { /* Description */ }
            <div className="text-justify">
                {product.description}
            </div>
            <HorizontalLine/>
        { /* Category */ }
            <div>
                <span className="font-semibold">Category : </span>
                {product.category}
            </div>
        { /* Brand */ }
            <div>
                <span className="font-semibold">Brand : </span>
                {product.brand}
            </div>
        { /* is In Strock ? */ }
            <div className={product.inStock ? 'text-teal-400' : 'text-rose-400' }>
                {product.inStock ? 'In Stock' : 'Out Of Stock'}
            </div>
            <HorizontalLine/>
        { /* Set Color */ }
            <SetColor
                cartProduct={cartProduct}
                images={product.images}
                handleColorSelect={handleColorSelect}
            />
            <HorizontalLine/>
            <div>qnt</div>
            <HorizontalLine/>
            <div>add cart</div>
        </div>
    </div>
  )
}

export default ProductDetails