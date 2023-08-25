"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";

import "./HeroSlider.css";

export default function HeroSlider() {
    return (
        <>
            <Swiper
                modules={[EffectCoverflow]}
                centeredSlides
                effect="coverflow"
                slidesPerView={2}
                loop
                coverflowEffect={{
                    rotate: 0,

                    slideShadows: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                mousewheel={{ thresholdDelta: 30 }}
            >
                <SwiperSlide>
                    <Image
                        src={"/heli1.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem]  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli2.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem]   "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli2.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem]  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli2.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem]  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli2.jpg"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem]  "
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
