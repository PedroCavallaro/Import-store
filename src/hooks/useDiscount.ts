import { Product, ProductWithDiscount } from "@/@types/types";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

async function getDiscounts() {
    const { data }: AxiosResponse<ProductWithDiscount[]> = await api.get(
        "/product/discount"
    );

    return data;
}

export function useDiscount() {
    const { data: discounts, isLoading } = useQuery(
        ["discounts"],
        getDiscounts
    );

    return {
        discounts,
    };
}
