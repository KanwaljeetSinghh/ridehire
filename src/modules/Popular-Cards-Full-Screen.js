import { useRef } from 'react';
import PopularCard from "./Popular-Card";
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function PopularCardsFullScreen(props){
    const swiperRef = useRef(null);
    return (
        <div className={`col-12`}>
            <Swiper 
                ref={swiperRef}
                spaceBetween={15}
                slidesPerView={2.2}
                breakpoints={{
                    567: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 15,
                    },
                    1367: {
                        slidesPerView: 8,
                        spaceBetween: 15,
                    },
                    1920: {
                        slidesPerView: 9,
                        spaceBetween: 20,
                    }
                }}
            >
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
                <SwiperSlide><PopularCard src="/images/Collectable.png"></PopularCard></SwiperSlide>
            </Swiper>
        </div>
    ) 
}

export default PopularCardsFullScreen;