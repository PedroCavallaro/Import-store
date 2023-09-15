import { Product } from "@/@types/types";
import { formatPrice } from "@/services/currency";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Button from "../Button";
import { BiCart, BiShoppingBag } from "react-icons/bi";

export default function HeroInfo({
    name,
    price,
}: Pick<Product, "name" | "price">) {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-[40px] w-[35rem] font-bold">{name}</h2>

            <div className="flex items-center gap-3 text-lg">
                <p className="text-orange-400 flex items-center">
                    5 <AiFillStar />
                </p>

                <button className="text-gray-400 hover:text-black transition-all">
                    200 reviews
                </button>
            </div>
            <div className="flex items-center justify-start">
                <Button
                    aria-label="itens salvos"
                    name="heart"
                    className="hover:text-red-600 transition-all"
                >
                    <AiOutlineHeart size={30} />
                </Button>
                <p>Salvar</p>
            </div>
            <h3 className="text-2xl font-bold">Por: {formatPrice(price)}</h3>
            <div className="flex flex-col gap-3 ">
                <Button className="flex items-center justify-center h-[3rem] rounded-md bg-orange-300 hover:bg-orange-500 transition-all">
                    <span className="flex items-center gap-2 text-white">
                        <BiShoppingBag size={30} /> Comprar agora
                    </span>
                </Button>
                <Button className="flex items-center justify-center h-[3rem] rounded-md bg-orange-400 hover:bg-orange-500 transition-all">
                    <span className="flex items-center gap-2 text-white">
                        <BiCart size={30} /> Adicionar ao carrinho
                    </span>
                </Button>
            </div>
        </div>
    );
}
