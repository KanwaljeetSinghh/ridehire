import { useState } from 'react';
import styles from '../css/filters.module.css';
import FilterButton from './Filter-Button';
import FilterModal from './Filter-Modal';
import PriceModal from './Price-Modal';
import Checkbox from './Checkbox';
import PriceButton from './Price-button';

function FilterBar(props){
    
    const [filterModal,setFilterModal] = useState(false);
    const [priceModal,setPriceModal] = useState(false);
    const handler = () =>{
        if(priceModal){
            setPriceModal(prev => !(prev));
        }
        if(filterModal){
            document.getElementsByTagName("html")[0].classList.remove("oy-hidden")
        }
        else{
            document.getElementsByTagName("html")[0].classList.add("oy-hidden")
        }
        setFilterModal(prev => !(prev));
        
    }
    const priceHandler = () =>{
        if(filterModal){
            setFilterModal(prev => !(prev));
        }
        if(priceModal){
            document.getElementsByTagName("html")[0].classList.remove("oy-hidden")
        }
        else{
            document.getElementsByTagName("html")[0].classList.add("oy-hidden")
        }
        setPriceModal(prev => !(prev));
    }

    return (
        <div className="bg-smoke p-relative">
            <div className={`container ${styles["filter__bar"]} d-flex d-align-center d-justify-space-between`}>
                <div className='d-flex d-align-center'>
                    <PriceButton value="Price" handler={priceHandler} />
                    <FilterButton value="Filters" handler={handler} />
                </div>
                <div className='d-flex d-align-center d-m-none d-l-none'>
                    <span className='font-16 l-26 f-400 mr-2'>Map</span> 
                    <Checkbox handler={props.handler}></Checkbox>
                </div>
                
                {filterModal && <FilterModal handler={handler}></FilterModal>}
                {priceModal && <PriceModal handler={priceHandler}></PriceModal>}
                
            </div>
            
        </div>
    )
}

export default FilterBar;