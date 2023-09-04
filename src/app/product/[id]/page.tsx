import { Product } from "@/@types/types";
import ProductCard from "@/components/Home/ProductSection/ProductCard";
import { api } from "@/lib/api";
import { AxiosResponse } from "axios";

async function getServerSideProps(id: string) {
    const { data }: AxiosResponse<Product> = await api.get(`/product/${id}`);
    return data;
}

export default async function Product({ params }: { params: { id: string } }) {
    const { coverImage, id, name, pictures, price } = await getServerSideProps(
        params.id
    );
    return (
        <main>
            <ProductCard
                coverImage={coverImage}
                id={id}
                name={name}
                price={price}
                key={id}
            />
        </main>
    );
}
