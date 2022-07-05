import Price from '../icons/Price';
import DownArrow from '../icons/Down-Arrow';
function PriceButton(props){
    return(
        <a onClick={props.handler} className={`user-select-none btn-white f-400 font-16 l-26 rounded-10 mr-1 d-flex d-align-center btn-fixed-width`}> 
           {props.value}
           <span class="mr-1">&nbsp;</span> 
           <DownArrow></DownArrow>
        </a>
    )
}

export default PriceButton;