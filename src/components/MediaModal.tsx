"use client";
import { useProductMedia } from "@/contexts/MediaContext";
import Button from "./Button";
import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function MediaModal({ children }: { children: ReactNode }) {
    const { isModalOpen, handleMediaModal, mediaState } = useProductMedia();

    return (
        <>
            {isModalOpen && (
                <>
                    <div className="w-[100vw] h-[100vh] fixed top-0 z-30 bg-black bg-opacity-50 flex items-center justify-center ">
                        {children}
                    </div>
                    <Button
                        onClick={() => {
                            handleMediaModal();
                        }}
                        className="text-white z-50 fixed  top-0 right-0 mt-3 text-2xl mr-10"
                    >
                        <AiOutlineClose />
                    </Button>
                </>
            )}
        </>
    );
}
