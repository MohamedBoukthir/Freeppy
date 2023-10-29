"use client";

import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import SetColor from "@/components/Products/SetColor";
import SetQuantity from "@/components/Products/SetQuantity";
import ProductImg from "@/components/Products/ProductImg";
import Button from "@/components/Button";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

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

    // useCart hook
    const {handleAddProductToCart, cartProducts} = useCart();

    // useState hook (check if products is in cart)
    const[isProductInCart, SetIsProductInCart] = useState(false);

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

    console.log(cartProducts)

    // useRouter
    const router = useRouter();

    // useEffect Hook (logic of cart view)
    useEffect(() => {
        SetIsProductInCart(false);

        if(cartProducts) {
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
            )

            if(existingIndex > -1) {
                SetIsProductInCart(true);
            }
        }
    }, [cartProducts])

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

    // quantity increase Func
    const handleQtyIncrease = useCallback(() => {

        if(cartProduct.quantity === 99) {
            return;
        }

        setCartProduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1}
        })
    }, [cartProduct]);

    // quantity decrease Func
    const handleQtyDecrease = useCallback(() => {

        if(cartProduct.quantity === 1) {
            return;
        }

        setCartProduct((prev) => {
            return {...prev, quantity: prev.quantity - 1 }
        })
    }, [cartProduct]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Image */}
      <ProductImg
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />

      {/* Product Details */}
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        {/* Product name */}
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        {/* Rating */}
        <div className="flex items-center gap-5">
          <Rating value={productRating} readOnly />
          <div> {product.reviews.length} Reviews </div>
        </div>
        <HorizontalLine />
        {/* Description */}
        <div className="text-justify">{product.description}</div>
        <HorizontalLine />
        {/* Category */}
        <div>
          <span className="font-semibold">Category : </span>
          {product.category}
        </div>
        {/* Brand */}
        <div>
          <span className="font-semibold">Brand : </span>
          {product.brand}
        </div>
        {/* is In Strock ? */}
        <div
          className={
            product.inStock
              ? "text-teal-400 font-semibold"
              : "text-rose-400 font-semibold"
          }
        >
          {product.inStock ? "In Stock" : "Out Of Stock"}
        </div>
        <HorizontalLine />
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-2">
                <MdCheckCircle size={20} className="text-teal-400"/>
                <span className="font-semibold">Product Added To Cart</span>
            </p>
            <div className="max-w-[300px]">
                <Button label="View Cart" outline onClick={() => {
                    router.push('/cart')
                }}
                />
            </div>
          </>
        ) : (
            /* Hide this if product is in cart */ 
          <>
            {/* Set Color */}
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <HorizontalLine />
            {/* Set Quantity */}
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyincrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />
            <HorizontalLine />
            {/* Add To Cart Button */}
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetails