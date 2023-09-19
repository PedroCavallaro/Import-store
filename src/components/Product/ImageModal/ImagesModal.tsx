"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ImagesModal.css";

export default function ImagesModal({ pictures }: { pictures: Array<string> }) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Swiper loop centeredSlides roundLengths>
                {pictures.map((src, index) => {
                    return (
                        <SwiperSlide key={index.toString()}>
                            <Image
                                src={src}
                                alt="a"
                                width={200}
                                height={200}
                                className="w-[40rem] h-[40rem]"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
