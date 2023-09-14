import { Product } from "@/@types/types";
import Images from "./Images";
import HeroInfo from "./HeroInfo";

export default function Hero({
    coverImage,
    id,
    name,
    pictures,
    price,
    Category,
    description = "",
}: Product) {
    return (
        <section className="flex gap-16 mt-5  px-4">
            <Images coverImage={coverImage} pictures={pictures} />
            <HeroInfo name={name} price={price} />
        </section>
    );
}
