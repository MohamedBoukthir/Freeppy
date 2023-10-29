import { CartProductType } from "@/app/product/[id]/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

interface CartContextType {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    
    const [cartTotalQty, SetCartTotalQty] = useState(0)
    const [cartProducts, SetCartProducts] = useState<CartProductType[] | null>(null)

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        SetCartProducts((prev) => {
            let updatedCart;

            if(prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }

            return updatedCart;
        })
    }, []);

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart

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
