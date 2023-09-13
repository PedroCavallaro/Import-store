import { Product } from "@/@types/types";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";
import ProductCard from "../Home/ProductSection/ProductCard";
async function getServerSideProps(id: string) {
    const { data }: AxiosResponse<Product[]> = await api.get(
        `/product/category/${id}`
    );

    return data;
}

export default async function RelatedProducts({
    categoryId,
}: {
    categoryId: string;
}) {
    const relatedProducts = await getServerSideProps(categoryId);
    return (
        <section className="px-4 py-4 ml-3">
            <h2 className="text-2xl font-bold">Produtos Relacionados</h2>
            <div className="w-[90rem] overflow-x-scroll h-[26rem]">
                <div className="relative flex w-full ">
                    <div className="absolute flex  z-50">
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
                </div>
            </div>
        </section>
    );
}
