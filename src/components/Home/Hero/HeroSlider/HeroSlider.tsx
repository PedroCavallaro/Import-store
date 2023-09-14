"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";

import "./HeroSlider.css";
import { memo } from "react";

export const HeroSlider = () => {
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
                lazyPreloadPrevNext={2}
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
                        width={100}
                        height={100}
                        loading="eager"
                        className="w-[40rem] object-cover h-[29rem] rounded-lg  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/heli1.jpg"}
                        alt="a"
                        width={100}
                        height={100}
                        loading="eager"
                        className="w-[40rem] object-cover h-[29rem] rounded-lg   "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/orange.png"}
                        alt="a"
                        width={100}
                        height={100}
                        loading="eager"
                        className="w-[40rem] object-cover h-[29rem] rounded-lg  "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/blue.png"}
                        alt="a"
                        width={100}
                        height={100}
                        loading="eager"
                        className="w-[40rem] object-cover h-[29rem] rounded-lg  "
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default memo(HeroSlider);
