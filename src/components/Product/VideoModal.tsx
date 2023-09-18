"use client";
import { useProductMedia } from "@/contexts/MediaContext";

export default function VideoModal({ videoPath }: { videoPath: string }) {
    const { isModalOpen } = useProductMedia();
    return (
        <>
            {isModalOpen && (
                <div className="w-[100vw] h-[100vh] fixed top-0 z-30 bg-black  opacity-75 flex items-center justify-center ">
                    <div className="bg-white opacity-[1] ">
                        <p className="text-black">
                            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
                            asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd
                            asdasdasd
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
