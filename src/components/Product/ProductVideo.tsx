"use client";
import { useProductMedia } from "@/contexts/MediaContext";
import Button from "../Button";
import VideoModal from "./VideoModal";

export default function ProductVideo() {
    const { isModalOpen, handleMediaModal } = useProductMedia();
    return (
        <>
            <div className="absolute">
                <div className="flex flex-col relative -top-3 left-0 w-[6rem]  ">
                    <div className="w-[6rem] h-[6rem] bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <Button onClick={() => handleMediaModal()}>
                            <video autoPlay muted loop>
                                <source src="/VIDEO 10s.mp4" type="video/mp4" />
                            </video>
                        </Button>
                    </div>
                    <p className="text-center mt-1">Video do produto</p>
                </div>
            </div>
        </>
    );
}
