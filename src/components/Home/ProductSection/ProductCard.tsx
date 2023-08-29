import { Product } from "@/@types/types";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";

export default function ProductCard({
    id,
    name,
    price,
    coverImage,
}: Pick<Product, "id" | "name" | "coverImage" | "price">) {
    return (
        <>
            <Link
                href={"/"}
                className="gap-2 border-2 flex flex-col border-black px-2 py-2 rounded-lg"
            >
                <Image
                    src={coverImage}
                    alt={name}
                    className="w-[15rem] object-cover"
                    width={300}
                    height={300}
                />
                <div>
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <Button className="bg-orange-400 rounded-lg h-[2rem] flex gap-2 items-center justify-center">
                    <BsCartPlus />
                    <span>Adicionar ao Carrinho</span>
                </Button>
            </Link>
        </>
    );
}
