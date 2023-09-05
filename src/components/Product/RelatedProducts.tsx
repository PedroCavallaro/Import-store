import { Product } from "@/@types/types";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";
import ProductCard from "../Home/ProductSection/ProductCard";

async function getRelatedProducts(id: string) {
    const { data }: AxiosResponse<Product[]> = await api.get(
        `/product/category/${id}`
    );

    return data;
}

export default async function RelatedProducts({
    Category,
}: {
    Category: string;
}) {
    const relatedProducts = await getRelatedProducts(Category);
    return (
        <section className="px-4 py-4 ml-3">
            <h2 className="text-2xl font-bold">Produtos Relacionados</h2>
            <div className="flex gap-2">
                {relatedProducts.map(
                    ({ coverImage, id, name, price }, index) => {
                        return (
                            <ProductCard
                                key={id}
                                coverImage={coverImage}
                                id={id}
                                name={name}
                                price={price}
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
}
