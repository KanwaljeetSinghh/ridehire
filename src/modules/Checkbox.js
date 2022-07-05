import { useState, useEffect } from "react";

const Checkbox = (props) => {
    const [isactive,setActive] = useState(true);
    const checkboxHandler = (e) =>{
        props.handler(prev=> !prev);
        setActive(prev => !prev);
    }

    useEffect(()=>{
        checkboxHandler();
    },[]);
    return (
        <label className="rectangle">
            <input type="checkbox" defaultChecked={isactive} onClick={checkboxHandler}/>
            <span className="toggle"></span>
        </label>
    )
}

export default Checkbox;
 