import Button from "@/components/Button";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

interface CategoryCardProps {
    id: string;
    description: string;
}

export default function CategoryCard({ id, description }: CategoryCardProps) {
    return (
        <>
            <div className="relative h-[10rem] mb-16 group ">
                <div className="w-[15rem] h-[4rem] bg-white relative -left-3  -bottom-8 -rotate-12 "></div>
                <div className="w-[10rem] h-[9rem] bg-red-500 grid place-content-center px-2 rounded-md  text-white">
                    <div className="relative -bottom-6 flex items-center gap-4">
                        <p>{description}</p>
                        <Button className="px-2 py-2 rounded-lg backdrop-blur-kg drop-shadow-lg bg-white  bg-opacity-40 group-hover:scale-105 transition-all ">
                            <BsChevronRight />
                        </Button>
                    </div>
                    <Image
                        src={"/heli1.jpg"}
                        className="absolute rounded-md -top-4 z-20 w-36 "
                        width={200}
                        height={200}
                        alt="a"
                    />
                </div>
            </div>
        </>
    );
}
