"use client";

import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[id]/ProductDetails"
import Link from "next/link";
import { truncateText } from "@/utils/truncateTxt";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";
import SetQuantity from "@/components/Products/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps  {
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({item}) => {

    const {handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease} = useCart();

  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-[70px] aspect-square">
                    <Image
                        src={item.selectedImg.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                    />
                </div>
            </Link>
            <div className="flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}</Link>
                    <div className="text-slate-500 font-light"> 
                        {item.selectedImg.color} 
                    </div>
                    <div className="w-[70px]">
                        <button className="text-rose-400 font-semibold gap-2 flex"
                                onClick={() => handleRemoveProductFromCart(item)}
                        >
                            <AiOutlineDelete size={20}/>
                            Remove                      
                        </button>
                    </div>               
            </div>
        </div>
        <div className="justify-self-center">
            {formatPrice(item.price)}
        </div>
        <div className="justify-self-center">
            <SetQuantity 
                cartCounter={true}
                cartProduct={item}
                handleQtyincrease={() => {handleCartQtyIncrease(item)}}
                handleQtyDecrease={() => {handleCartQtyDecrease(item)}}
            />
        </div>
        <div className="justify-self-end font-semibold">
            {formatPrice(item.price * item.quantity)}
        </div>
    </div>
  )
}

export default ItemContent