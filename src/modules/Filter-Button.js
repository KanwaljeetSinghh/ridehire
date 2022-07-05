/* 
Module Parameters
 -(String) modal = 1 (if you have modal to popup) 
 -(String) modal = 0 (if there is no popup)
 -(String) src (pass an URL of svg icon)
 -(String) alt (alternative text for icon)
 -(String) value (Button Text)
*/
import Filter from '../icons/Filter';

function FilterButton(props){
    return(
        <a onClick={props.handler} className={`btn-white user-select-none f-400 font-16 l-26 rounded-10 mr-1 d-flex d-align-center btn-fixed-width`}> 
            <Filter color="#00D47B"></Filter> &nbsp;
            &nbsp;{props.value}
        </a>
    )
}

export default FilterButton;