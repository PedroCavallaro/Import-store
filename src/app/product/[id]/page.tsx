import { Product } from "@/@types/types";
import Hero from "@/components/Product/Hero";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/Footer";
import Description from "@/components/Product/Description";
import MediaModal from "@/components/MediaModal";
import ImagesModal from "@/components/Product/ImageModal/ImagesModal";

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
    const {
        coverImage,
        id,
        name,
        pictures,
        price,
        Category,
        categoryId,
        description,
    } = await getServerSideProps(params.id);
    return (
        <main className="flex flex-col gap-6">
            <MediaModal>
                <ImagesModal pictures={pictures} />
                {/* <VideoModal videoPath="pasd" /> */}
            </MediaModal>

            <Hero
                description=""
                coverImage={coverImage}
                id={id}
                name={name}
                pictures={pictures}
                price={price}
                Category={Category}
            />
            <Description description={description} />
            <Suspense fallback={<div>Carregando...</div>}>
                <RelatedProducts categoryId={categoryId!} />
            </Suspense>
            <Footer />
        </main>
    );
}
