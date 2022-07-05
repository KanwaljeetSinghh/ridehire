import Plus from "../icons/Plus";
import SmallDownArrow from "../icons/SmallDownArrow";

function Stops(){

    const myStyle={
       marginRight:"5px",
    };
    const style={
        marginTop:"-6px",
    }

    return (
        <div className="destination-stop d-flex d-justify-center d-align-center pr-1" style={style}>
            <span className="destination-stop-circle d-flex d-justify-center d-align-center">
                <Plus color="#00D47B"></Plus>
            </span>
            <span className="font-10 l-10" style={myStyle}>Stops</span>
            <SmallDownArrow ></SmallDownArrow>
        </div>
    );
}

export default Stops;