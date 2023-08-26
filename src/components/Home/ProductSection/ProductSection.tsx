"use client";
import { usePriceRange } from "@/hooks/usePriceRange";
import PriceRange from "./PriceRange";

export default function ProductSection() {
    const { products, handlePriceChange, price } = usePriceRange();
    return (
        <section>
            <PriceRange handlePriceChange={handlePriceChange} price={price} />
        </section>
    );
}
