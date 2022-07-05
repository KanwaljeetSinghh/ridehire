import {useState} from 'react';

function AmanityButton(props){
    const [active,setActive] = useState(false);
    const handler = () =>{
        setActive(prev => !prev);
    }

    return(
        <a className={`btn-amenities font-16 l-26 f-400 border rounded-50 mr-1 mb-1  ${active?'bg-primary text-white f-600':'bg-white text-secondary f-400'}`} onClick={handler}>{props.value}</a>
    )
}

export default AmanityButton;