"us client";

import { CartProductType } from "@/app/product/[id]/ProductDetails";

interface SetQuantityProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyincrease: () => void;
    handleQtyDecrease: () => void;
}

const SetQuantity: React.FC<SetQuantityProps> = ({cartCounter, cartProduct, handleQtyincrease, handleQtyDecrease}) => {
  return (
    <div className="flex gap-8 items-center">
        {cartCounter ? null 
            : <div className="font-semibold">QUANTITY: </div>}
        <div className="flex gap-4 items-center text-base">
            <button 
                onClick={handleQtyDecrease}
                className="border-[1.2px] border-slate-300 px-2 rounded"
                >
                    -
            </button>
            <div>{cartProduct.quantity}</div>
            <button 
                onClick={handleQtyincrease}
                className="border-[1.2px] border-slate-300 px-2 rounded "
                >
                    +
            </button>
        </div>
    </div>
  )
}

export default SetQuantity