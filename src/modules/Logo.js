/* 
Module Parameters
 -(String) type = 1 (if there is an image of logo)
 -(String) type = 2 (if there is simple text of logo)
 -(String) src (pass an URL of logo image)
 -(String) alt (alternative text for image)
 -(String) value (pass the string text which you wanna show as logo)
*/


function Logo(props){
    if(props.type === "1"){
        return(
            <div className="col-2">
                <img src={props.src} alt={props.alt} />
            </div>
        )
    }
    else{
        return(
            <div className="col-2">
                <span className="h1 f-600 text-secondary l-26">{props.value}</span>
            </div>
        )
    }
}

export default Logo;