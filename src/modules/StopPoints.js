import {useState} from 'react';
import StopPointsShow from "./StopPointsShow";
function StopPoints(){

    const [showStops, setShowStops] = useState(false);

    const handler = () =>{
        setShowStops(prev => !prev)
    }

    const myStyle={
        margin:"0 auto",
    }

    return (
        <div className="mobile-destination  rounded-10 col-12 pl-2 pr-2 pb-2" style={myStyle}>
            <ul className="m-0 p-0 border rounded-10">
                <StopPointsShow type="0" classes={`ride-point starting-point ${showStops?"open":""}`} handler={handler}></StopPointsShow>
                <StopPointsShow type="1" classes={`ride-point mid-point ${showStops?"open":""}`}></StopPointsShow>
                <StopPointsShow type="1" classes={`ride-point mid-point ${showStops?"open":""}`}></StopPointsShow>
                <StopPointsShow type="2" classes={`ride-point stop-point ${showStops?"open":""}`}></StopPointsShow>
                <StopPointsShow type="3" classes={`address-point ${showStops?"open":""}`}></StopPointsShow>
            </ul>
        </div>
    );
}
export default StopPoints;