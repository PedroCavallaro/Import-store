"use client";
import { Product } from "@/@types/types";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface ProductContext {
    products: Product[] | undefined;
}

const ProductContext = createContext({} as ProductContext);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>();
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);
