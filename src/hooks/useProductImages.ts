import { useState } from "react";

export function useProductImages(coverImage: string) {
    const [currentImage, setCurrentImage] = useState(coverImage);

    return {
        currentImage,
    };
}
