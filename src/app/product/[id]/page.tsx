import { Product } from "@/@types/types";
import Hero from "@/components/Product/Hero";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/Footer";

const RelatedProducts = dynamic(
    () => import("@/components/Product/RelatedProducts"),
    {
        ssr: true,
        loading: () => <p>Carregando...</p>,
    }
);
async function getServerSideProps(id: string) {
    const { data }: AxiosResponse<Product> = await api.get(`product/${id}`);
    return data;
}

export default async function Product({ params }: { params: { id: string } }) {
    const { coverImage, id, name, pictures, price, Category, categoryId } =
        await getServerSideProps(params.id);
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
                <RelatedProducts categoryId={categoryId!} />
            </Suspense>
            <Footer />
        </main>
    );
}
