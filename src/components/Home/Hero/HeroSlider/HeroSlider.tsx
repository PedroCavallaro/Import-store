"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";

import "./HeroSlider.css";

export default function HeroSlider() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    reverseDirection: true, 
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                centeredSlides
                effect="coverflow"
                slidesPerView={2}
                loop
                coverflowEffect={{
                    rotate: 0,
                    modifier: 2,
                    slideShadows: true,
                }}
                grabCursor
                keyboard={{
                    enabled: true,
                }}
                mousewheel={{ thresholdDelta: 30 }}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <Image
                        src={"/blue.png"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem] rounded-lg  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/yellow.png"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem] rounded-lg   "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/orange.png"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem] rounded-lg  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/blue.png"}
                        alt="a"
                        width={200}
                        height={200}
                        className="w-[40rem] object-cover h-[29rem] rounded-lg  "
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
