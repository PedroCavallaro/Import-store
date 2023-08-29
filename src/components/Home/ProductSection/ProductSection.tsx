"use client";
import { usePriceRange } from "@/hooks/usePriceRange";
import PriceRange from "./PriceRange";
import ProductCard from "./ProductCard";

export default function ProductSection() {
    const { products, handlePriceChange, price } = usePriceRange();

    return (
        <section className="flex flex-col gap-6">
            <PriceRange handlePriceChange={handlePriceChange} price={price} />
            <div className="flex gap-6 w-[90rem] flex-wrap">
                {products?.map(({ id, name, coverImage, price }, index) => {
                    return (
                        <ProductCard
                            id={id}
                            name={name}
                            price={price}
                            coverImage={coverImage}
                            key={index.toString()}
                        />
                    );
                })}
            </div>
        </section>
    );
}
