import Button from "@/components/Button";
import Image from "next/image";

export default function CategoryCard() {
    return (
        <>
            <div className="relative h-[10rem] mb-16 group ">
                <div className="w-[15rem] h-[4rem] bg-white relative -left-3  -bottom-8 -rotate-12 "></div>
                <div className="w-[10rem] h-[9rem] bg-red-500 grid place-content-center px-2 rounded-md  text-white">
                    <p className=" relative -bottom-6">Avioes</p>
                    <Button className=" relative -bottom-6 mt-2">
                        <span>Ver mais</span>
                    </Button>
                    <Image
                        src={"/heli1.jpg"}
                        className="absolute -top-4 z-20 w-36 group-hover:scale-105 transition-all "
                        width={200}
                        height={200}
                        alt="a"
                    />
                </div>
            </div>
        </>
    );
}
