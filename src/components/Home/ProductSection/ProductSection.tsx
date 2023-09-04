"use client";
import { usePriceRange } from "@/hooks/usePriceRange";
import PriceRange from "./PriceRange";
import ProductCard from "./ProductCard";
import NoItens from "./NoItens";

export default function ProductSection() {
    const { products, handlePriceChange, price } = usePriceRange();
    return (
        <section className="px-4 py-4 ml-3">
            <div className="flex flex-col gap-6">
                <PriceRange
                    handlePriceChange={handlePriceChange}
                    price={price}
                />
                {!products?.length ? (
                    <NoItens />
                ) : (
                    <div className="flex gap-6 w-[90rem] h-[50rem] flex-wrap">
                        {products?.map(
                            ({ id, name, coverImage, price }, index) => {
                                return (
                                    <ProductCard
                                        id={id}
                                        name={name}
                                        price={price}
                                        coverImage={coverImage}
                                        key={id}
                                    />
                                );
                            }
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
