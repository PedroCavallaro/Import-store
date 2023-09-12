import { Product } from "@/@types/types";
import Hero from "@/components/Product/Hero";
import RelatedProducts from "@/components/Product/RelatedProducts";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";
import { Suspense } from "react";

async function getServerSideProps(id: string) {
    const { data }: AxiosResponse<Product> = await api.get(`product/${id}`);
    return data;
}

export default async function Product({ params }: { params: { id: string } }) {
    const { coverImage, id, name, pictures, price, Category, categoryId } =
        await getServerSideProps(params.id);
    console.log(id);
    return (
        <main>
            <Hero
                coverImage={coverImage}
                id={id}
                name={name}
                pictures={pictures}
                price={price}
                Category={Category}
            />
            <Suspense fallback={<div>Carregando...</div>}>
                <RelatedProducts Category={Category!.description} />
            </Suspense>
        </main>
    );
}
