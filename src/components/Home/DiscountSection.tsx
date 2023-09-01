"use client";
import { useDiscount } from "@/hooks/useDiscount";
import React from "react";
import ProductCard from "./ProductSection/ProductCard";

const DiscountSection = () => {
    const { discounts } = useDiscount();
    return (
        <section className="px-4 py-4 ml-3">
            <h2 className="text-2xl font-bold">Com desconto</h2>
            <div className=" flex gap-2">
                {discounts?.map(({ Product, isActive, amount }, index) => {
                    return (
                        <ProductCard
                            coverImage={Product.coverImage}
                            id={Product.id}
                            amount={amount}
                            isDiscountActive={isActive}
                            name={Product.name}
                            price={Product.price}
                            key={index.toString()}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default DiscountSection;
