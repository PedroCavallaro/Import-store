import { Product } from "@/@types/types";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useProducts = () => {
    async function getAllProducts() {
        const { data }: AxiosResponse<Product[]> = await api.get("/product");
        return data;
    }
    const { data: products, isLoading } = useQuery(
        ["products"],
        getAllProducts
    );

    return {
        products,
    };
};
