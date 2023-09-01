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
            <div className="gap-2  flex flex-col shadow-md px-2 py-2 rounded-lg">
                <Image
                    draggable={false}
                    src={coverImage}
                    alt={name}
                    className="w-[15rem] object-cover"
                    width={300}
                    height={300}
                    loading="lazy"
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
                    <Link
                        href={"/"}
                        className="bg-orange-400 w-[80%] rounded-full h-[2.5rem] flex gap-2 items-center px-2 justify-center text-white text-sm"
                    >
                        <FaCartPlus />
                        <span>Adicionar ao Carrinho</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
