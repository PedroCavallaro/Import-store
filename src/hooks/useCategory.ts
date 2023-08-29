import { Category } from "@/@types/types";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

async function getCategories() {
    const { data }: AxiosResponse<Category[]> = await api.get("/category");
    return data;
}
export const useCategory = () => {
    const { data: categories, isLoading } = useQuery(
        ["categories"],
        getCategories
    );

    return {
        categories,
    };
};
