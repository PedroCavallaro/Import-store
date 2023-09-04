import { Product } from "@/@types/types";
import Hero from "@/components/Product/Hero";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";

async function getServerSideProps(id: string) {
    const { data }: AxiosResponse<Product> = await api.get(`/product/${id}`);
    return data;
}

export default async function Product({ params }: { params: { id: string } }) {
    const { coverImage, id, name, pictures, price, Category } =
        await getServerSideProps(params.id);

    console.log(Category);
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
        </main>
    );
}
