import { useRef } from "react";

export function useProductImages(coverImage: string) {
    const currentImage = useRef(coverImage);
    return {
        currentImage,
    };
}
