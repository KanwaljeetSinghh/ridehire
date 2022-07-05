import { useRef } from 'react';
import PopularCards from './Popular-Cards';
import PopularCardsFullScreen from './Popular-Cards-Full-Screen';
import Cards from './Cards';
import Map from './Map';
import RightArrow from '../icons/RightArrow';
import styles from '../css/data-populate.module.css';

function DataPopulate(props){
    let classes ='';
    if(!props.map){
        classes = "full__listing_view";
    }

    const slider = useRef(null);

    return (
        <div className='container-fluid d-flex d-flex-wrap d-justify-space-between pt-3 p-relative pb-5'>
            <div className={`${styles['data__listing']} ${styles[classes]}`}>
                <div className={`d-flex d-flex-wrap ${styles['data__listing_wrapper']}`}>
                    <div className='col-12 d-flex d-align-center d-justify-space-between mb-3'>
                        <h3 className='d-inline-flex f-600 l-26 neg-letter-spacing'>Popular Vehicles For You</h3>
                        <div className='d-flex'>
                            {/* Previous Arrow */}
                            <a class="arrow-button-left border d-flex d-align-center d-justify-center" onClick={() => slider.current.swiper.slidePrev() }>
                                <RightArrow></RightArrow>               
                            </a>
                            {/* Next Arrow */}
                            <a class=" border arrow-button-right d-flex d-align-center d-justify-center ml-1" onClick={() => slider.current.swiper.slideNext()}>
                                <RightArrow></RightArrow>
                            </a>
                        </div>
                    </div>
                    {props.map?<PopularCards refer={slider}></PopularCards>:<PopularCardsFullScreen refer={slider}></PopularCardsFullScreen>}
                    
                    <Cards></Cards>
                </div>
            </div>
            {props.map && <>
            <div className={`pl-5 d-fixed d-align-center d-justify-center p-sticky ${styles["map__container"]} `}>
               <Map></Map>
            </div>
            </>}
        </div>
    )
}

export default DataPopulate;