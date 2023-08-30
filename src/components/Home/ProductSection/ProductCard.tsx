import { Product } from "@/@types/types";
import Button from "@/components/Button";
import { formatPrice } from "@/services/currency";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({
    id,
    name,
    price,
    coverImage,
}: Pick<Product, "id" | "name" | "coverImage" | "price">) {
    return (
        <>
            <div className="gap-2  flex flex-col shadow-md px-2 py-2 rounded-lg">
                <Image
                    src={coverImage}
                    alt={name}
                    className="w-[15rem] object-cover"
                    width={300}
                    height={300}
                />
                <div>
                    <p>{name}</p>
                    <p className="text-orange-400 font-bold">
                        {formatPrice(price)}
                    </p>
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
