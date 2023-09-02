import { formatPrice } from "@/services/currency";
import { ChangeEvent, useMemo, useState } from "react";
import { useProducts } from "./useProducts";

export function usePriceRange() {
    const { products } = useProducts();
    const [price, setPrice] = useState<number>(4000);

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.currentTarget.value));
    };

    const filteredProducts = useMemo(
        () => {
            return products?.filter((e) => e.price <= price);
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [products]
    );
    return {
        price: formatPrice(price),
        products: filteredProducts,
        handlePriceChange,
    };
}
