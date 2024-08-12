import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';
const ShopByCategory = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const SwiperArrowHandler = (val: string) => {
        if (val === "next") {
            swiperRef.current?.slideNext();
        } else {
            swiperRef.current?.slidePrev();
        }
    }
    return (
        <>
            {/* Start collection section */}
            <section className="shop__collection--section section--padding">
                <div className="container">
                    <div className="section__heading text-center mb-40">
                        <h2 className="section__heading--maintitle">Shop By Category</h2>
                    </div>
                    <div className="shop__collection--column5  swiper">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={4}
                            slidesPerView={4}
                            loop={true}
                            // navigation={true}
                            className="swiper-wrapper"
                        >

                            {[1, 2, 3, 4, 5].map((num) => (
                                <SwiperSlide key={num}>
                                    <div className="shop__collection--card text-center">
                                        <a className="shop__collection--link" href="#">
                                            <img
                                                className="shop__collection--img"
                                                src={`assets/img/collection/collection${num}.webp`}
                                                alt="icon-img"
                                            />
                                            <h3 className="shop__collection--title mb-0">Necklaces</h3>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="swiper__nav--btn swiper-button-next" onClick={() => SwiperArrowHandler("next")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=" -chevron-right"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                    <div className="swiper__nav--btn swiper-button-prev" onClick={() => SwiperArrowHandler("prev")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=" -chevron-left"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </div>
                </div>
            </section>
            {/* End collection section */}
        </>
    )
}

export default ShopByCategory
