import { createContext, useContext, useState } from "react";

interface CartContextType {
  cartTotalQty: number;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {

    const [cartTotalQty, SetCartTotalQty] = useState(0)
    const value = {
        cartTotalQty,
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
