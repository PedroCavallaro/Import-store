import { Product } from "@/@types/types";
import Image from "next/image";

export default function ProductCard({
    id,
    name,
    price,
    coverImage,
}: Pick<Product, "id" | "name" | "coverImage" | "price">) {
    return (
        <>
            <div>
                <Image src={coverImage} alt={name} width={300} height={300} />
            </div>
        </>
    );
}
