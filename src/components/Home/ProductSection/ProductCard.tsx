import { formatPrice, setDiscount } from "@/services/currency";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    coverImage: string;
    isDiscountActive?: boolean;
    amount?: number;
}

export default function ProductCard({
    id,
    name,
    price,
    coverImage,
    isDiscountActive,
    amount,
}: ProductCardProps) {
    return (
        <>
            <Link
                href={`product/${id}`}
                className="gap-2  flex flex-col shadow-md px-2 py-2 rounded-lg w-[16.5rem] hover:bg-gray-100 transition-all"
            >
                <Image
                    draggable={false}
                    src={coverImage}
                    alt={name}
                    className="w-[15rem] object-cover"
                    width={240}
                    height={100}
                    loading="eager"
                />
                <div>
                    <p>{name}</p>
                    <h2 className="text-orange-400 font-bold">
                        {isDiscountActive ? (
                            <>
                                <s className="text-sm text-gray-400">
                                    De: {formatPrice(price)}
                                </s>
                                <p>Por: {setDiscount(price, amount!)}</p>
                            </>
                        ) : (
                            formatPrice(price)
                        )}
                    </h2>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-orange-400 hover:bg-orange-500 w-[80%] rounded-full h-[2.5rem] flex gap-2 items-center px-2 justify-center text-white text-sm transition-all">
                        <FaCartPlus />
                        <span>Adicionar ao Carrinho</span>
                    </button>
                </div>
            </Link>
        </>
    );
}
