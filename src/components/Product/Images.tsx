"use client";
import { useProductImages } from "@/hooks/useProductImages";
import Image from "next/image";
import ProductVideo from "./ProductVideo";
import VideoModal from "./VideoModal";

interface ProductImages {
    coverImage: string;
    pictures: string[];
}
const imageIds = [1, 2, 3];
export default function Images({ coverImage, pictures }: ProductImages) {
    const { currentImage } = useProductImages(coverImage);

    return (
        <>
            <div className=" flex flex-col gap-2">
                <ProductVideo />
                <Image
                    src={currentImage.current}
                    alt=""
                    width={400}
                    key={"main"}
                    height={400}
                    className="w-[40rem] h-[35rem]  shadow-lg"
                />
                <div className="flex gap-2">
                    {pictures.map((image, index) => {
                        return (
                            <button key={imageIds[index]}>
                                <Image
                                    onClick={(e) => {
                                        e.currentTarget.src =
                                            currentImage.current;
                                    }}
                                    src={image}
                                    alt="a"
                                    width={100}
                                    height={100}
                                    className="rounded-md border-2 border-gray-100 w-[10rem] h-[10rem]"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
