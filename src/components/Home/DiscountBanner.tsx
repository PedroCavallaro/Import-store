import { BsArrowRight } from "react-icons/bs";
import Button from "../Button";
import Image from "next/image";

export default function DiscountBanner() {
    return (
        <section className="flex justify-center items-center px-4 py-4 ml-3">
            <div className="h-[20rem] w-full rounded-lg shadow-lg flex justify-between overflow-hidden">
                <div className="flex flex-col justify-center gap-10 py-2 ml-14">
                    <h2>Oferta Limitada</h2>
                    <h2 className="text-2xl font-bold w-[30rem]">
                        50% de desconto em todos os aso rem Ipsum is simply
                        dummy text of the printing and typesetting in.{" "}
                    </h2>
                    <Button className="bg-orange-400 text-white h-[3rem] rounded-md flex items-center gap-2 justify-center">
                        <span>Garanta já o seu</span>
                        <BsArrowRight />
                    </Button>
                </div>
                <Image
                    src={"/heli1.jpg"}
                    alt="a"
                    width={1000}
                    height={1000}
                    className="h-full object-cover w-full pl-[10rem] ml-2"
                />
            </div>
        </section>
    );
}
