import { Product } from "@/@types/types";
import { formatPrice } from "@/services/currency";
import { ChangeEvent, useState } from "react";

export function usePriceRange() {
    const [products, setProducts] = useState<Product[]>([]);
    const [price, setPrice] = useState<number>(1000);

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.currentTarget.value));
    };

    const filteredProducts = products.filter((e) => e.price < price);
    return {
        price: formatPrice(price),
        products: filteredProducts,
        handlePriceChange,
    };
}