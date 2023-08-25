"use client";
import Image from "next/image";
import "swiper/css";
import "./HeroSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSlider() {
    return (
        <>
            <Swiper centeredSlides={true} slidesPerView={1} loop={true}>
                <SwiperSlide>
                    <Image
                        src={"/heli1.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[25rem] object-cover h-[29rem]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli2.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli2.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
