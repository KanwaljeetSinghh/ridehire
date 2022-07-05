import { useState } from 'react';
import styles from '../css/data-populate.module.css';
import CircleIcon from '../icons/Circle';
import CircleFill from '../icons/CircleFill';


function PopularCard(props){
    const myStyle={
        backgroundImage:"url('car.jpg')"
    };
    const [active, setActive] = useState(false);
    const handler = () =>{
        setActive(prev=>!prev);
    }
    return(
        <div className={`d-flex d-align-end rounded-10 p-relative o-hidden user-select-none ${styles["popular__card"]}`} style={myStyle}>
            <div className='col-12 d-flex p-relative d-align-center d-justify-space-between'>
                <h6 className='l-20 f-600 text-white neg-letter-spacing-04'>Limo Vans</h6>
                <span className='d-flex d-align-center' onClick={handler}>
                    {active?<CircleFill color="#00D47B" />:<CircleIcon color="#00D47B" />}
                </span>
            </div>
        </div>
    )    
}

export default PopularCard;