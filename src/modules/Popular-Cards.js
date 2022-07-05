import PopularCard from "./Popular-Card";
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function PopularCards(props){
    const swiperRef = props.refer;
    return (
        <div className={`col-12`}>
            <Swiper 
                ref={swiperRef}
                spaceBetween={8}
                slidesPerView={1.5}
                breakpoints={{
                    374: {
                        slidesPerView: 2.2,
                        spaceBetween: 8,
                    },
                    567: {
                        slidesPerView: 3.2,
                        spaceBetween: 12,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1367: {
                        slidesPerView: 3.3,
                        spaceBetween: 15,
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 15,
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

export default PopularCards;