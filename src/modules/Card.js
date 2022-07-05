import { useRef } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import styles from '../css/data-populate.module.css';
import Favorite from '../icons/Favorite';
import Star from '../icons/Star';
import Passenger from '../icons/Passengers';

function Card(props){
const swiperRef = useRef(null);

    return(
        <div className={`border rounded-10 d-flex d-flex-column ${styles["card__wrapper"]} p-relative`}>
            <div className="card-header p-relative rounded-10">
                <Swiper 
                    ref={swiperRef}
                    spaceBetween={3}
                    slidesPerView={1}
                    navigation={true} 
                    modules={[Navigation,Pagination]}
                    className="cardHeaderSlider"
                    pagination={true}
                >
                    <SwiperSlide><img src="card-image.png" /></SwiperSlide>
                    <SwiperSlide><img src="card-image.png" /></SwiperSlide>
                    <SwiperSlide><img src="card-image.png" /></SwiperSlide>
                    <SwiperSlide><img src="card-image.png" /></SwiperSlide>
                </Swiper>

                <span className='badge-blury p-absolute'>Super Afflilaite</span>
                <span className={`${styles["favorite__icon"]}`}>
                    <Favorite></Favorite>
                </span>
            </div>
            <div className={`${styles["card__body"]}`}>
                <div className='d-flex d-align-center d-flex-wrap'>
                    <h3 className='text-primary l-25 f-700 d-inline-flex mr-2'>$120<span className='l-25 font-14 f-500'>/Hr</span></h3>
                    <h6 className='font-14 l-25 f-400 text-secondary neg-letter-spacing'>$800 Total</h6>
                    <h4 className='col-12 f-600 text-secondary l-25'>Ford E-350 Party Bus</h4>
                    <span className='col-12 text-secondary l-17 font-12 op-06 d-block'>
                        Lorem ipsum dolor sit amet, consectetur..
                    </span>

                    <div className='mt-3 d-flex d-flex-wrap d-align-center'>
                        <div className='d-flex d-align-center badge text-white font-13 f-600 mr-1'>
                            <Star></Star>
                            4.3
                        </div>
                        <span className='font-13 l-20 f-400 neg-letter-spacing text-secondary mr-3'> 53 Trips</span>

                        <span className='d-flex d-align-center font-13 l-20 f-400 neg-letter-spacing text-secondary'><Passenger></Passenger>&nbsp; 14 Pessenger</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;