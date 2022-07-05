import styles from '../css/filters.module.css';
import {useState} from 'react';
import Tick from '../icons/Tick'
function VehicleColorButtons(props){
    const color = props.color;

    const mystyle={
        background:color,
    }
    const [active,setActive] = useState(false);
    const handler = () =>{
        setActive(prev => !prev);
    }
    return (
        <div className={`${styles["vehicle__Button"]} d-flex d-align-center  d-justify-center rounded-50 `} onClick={handler} style={mystyle}>
            {active?<Tick color={props.fillcolor}></Tick>:<Tick color={props.color}></Tick>}
        </div>
    );
   
}
export default VehicleColorButtons;