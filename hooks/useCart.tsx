import { CartProductType } from "@/app/product/[id]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import {toast} from 'react-hot-toast';

interface CartContextType {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQty, SetCartTotalQty] = useState(0)
    const [cartProducts, SetCartProducts] = useState<CartProductType[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('FreppyCart');
        const productInCart: CartProductType[] | null = JSON.parse(cartItems);

        SetCartProducts(productInCart);
    }, [])

// add to cart func
    const handleAddProductToCart = useCallback((product: CartProductType) => {
        SetCartProducts((prev) => {
            let updatedCart;

            if(prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }

            toast.success('Product Added To Cart')
            localStorage.setItem("FreppyCart", JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, []);

// remove from cart func
    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if(cartProducts){
            const filtredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            SetCartProducts(filtredProducts)
            toast.success('Product Removed From Cart')
            localStorage.setItem("FreppyCart", JSON.stringify(filtredProducts));
        }
    }, [cartProducts])

// increase qty from cart
    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updatedCart;

        if (product.quantity === 99) {
            return toast.error('Oops, Max Reached')
        }

        if(cartProducts) {
            updatedCart = [...cartProducts]

        const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
        )

        if(existingIndex > -1) {
            updatedCart[existingIndex].quantity = ++ updatedCart[existingIndex].quantity
            }
        
        SetCartProducts(updatedCart)
        localStorage.setItem('FreppyCart', JSON.stringify(updatedCart))
        }
    }, [cartProducts])

// decrease qty from cart
    // increase qnt from cart
    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        let updatedCart;

        if (product.quantity === 1) {
            return toast.error('Oops, Min Reached')
        }

        if(cartProducts) {
            updatedCart = [...cartProducts]

        const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
        )

        if(existingIndex > -1) {
            updatedCart[existingIndex].quantity = -- updatedCart[existingIndex].quantity
            }
        
        SetCartProducts(updatedCart)
        localStorage.setItem('FreppyCart', JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease

    }
    return <CartContext.Provider value={value} {...props} />

}

export const useCart = () => {

    const context = useContext(CartContext)
    if (context === null) {
        throw new Error ('useCart hook must be used within a CartContextProvider. Make sure to wrap your application or component tree with a CartContextProvider.')
    }
    return context;
}
