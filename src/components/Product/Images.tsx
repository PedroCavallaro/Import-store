"use client";
import { useProductImages } from "@/hooks/useProductImages";
import Image from "next/image";

interface ProductImages {
    coverImage: string;
    pictures: string[];
}
const imageIds = [1, 2, 3];
export default function Images({ coverImage, pictures }: ProductImages) {
    const { currentImage } = useProductImages(coverImage);
    return (
        <>
            <div className="flex flex-col gap-2">
                <Image
                    src={currentImage}
                    alt=""
                    width={400}
                    height={400}
                    className="w-[40rem] h-[35rem]  shadow-lg"
                />
                <div className="flex gap-2">
                    {pictures.map((image, index) => {
                        return (
                            <button key={imageIds[index]}>
                                <Image
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
