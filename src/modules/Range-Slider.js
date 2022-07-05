import { useState } from 'react';
import styles from '../css/filters.module.css';

function RangeSlider(props){
    let temp = 0;
    const min = Number(props.min);
    const max = Number(props.max);
    const perStep = (max-min); // Calculate the one percentage og whole
    const perStepWithoutFraction = Math.floor(perStep);
    const fraction = perStep - perStepWithoutFraction;// calculate the fraction part so that you can make a balence between them
    const [minVal,setMinVal] = useState(min);
    const [maxVal,setMaxVal] = useState(max);
    const [progressLeft,setProgressLeft] = useState("0");
    const [progressRight,setProgressRight] = useState("0");

    const minHandler = (e) =>{
        temp = Number(e.target.value);
        if(temp < Number(maxVal)){
            setMinVal(e.target.value);
            // temp = ((Number(minVal) - min ) * perStepWithoutFraction) - ((Number(minVal) - min ) * fraction) ;
            
            temp = ((Number(minVal) - min)*100) / perStep;
            temp = temp;
            setProgressLeft(temp);
        }
         
    }
    const maxHandler = (e) =>{
        temp = Number(e.target.value);
        if(temp >= (Number(minVal))){
            setMaxVal(e.target.value);
            temp = -((Number(maxVal) - max)*100) / perStep;
            temp = (temp);
            setProgressRight(temp);
        }
    }

    return (
        <>
        
        <div className={`slider ${props.classes}`}>
            <div className="progress" style={{left:`${progressLeft}%`,right:`${progressRight}%`}}>
                
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min={props.min} max={props.max} step="1" value={minVal} onChange={minHandler} />
                <input type="range" className="range-max" min={props.min} max={props.max} step="1" value={maxVal} onChange={maxHandler} />
                
                {props.marker && <>
                    <div className="buble buble-min f-600 font-16 l-26 text-primary p-absolute" style={{left:(progressLeft-2)+'%'}}> 
                        {minVal}
                    </div>
                    <div className="buble-max f-600 font-16 l-26 text-primary p-absolute" style={{right:(progressRight-2.5)+'%'}}> 
                        {maxVal}
                    </div>
                </>
                }
            </div>
        </div>
                
        {props.labels && <>
        <div className={`d-grid ${styles["price__show"]} border-bottom pb-3`}>
            <div className={` mt-2 rounded-10 ${styles["search__bar"]}`}>
                <p className="font-16 l-26 text-grey mb-0 mt-0 p-0">Minimum Price</p>
                <h3 className='l-26 f-400 m-0 p-00 '>${minVal}</h3>
            </div>
            <div className={` mt-2 rounded-10 ${styles["search__bar"]} pr-3 pl-3`}>
                <p className="font-16 l-26 text-grey mb-0 mt-0 p-0">Maximum Price</p>
                <h3 className='l-26 f-400 m-0 p-00 '>${maxVal}</h3>
            </div>
        </div>
        </>
        }
        </>
    )
}

export default RangeSlider;