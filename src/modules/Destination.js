import DestinationLocation from "./DestinationLocation";
import DestinationDate from "./DestinationDate";
function Destination(){
    return (
        <div className="desktop-destination col-12 d-flex d-justify-center bg-smoke p-2 mb-2 destination rounded-20 ">
            <DestinationLocation></DestinationLocation>
            <DestinationDate></DestinationDate>
        </div>
    );
}
export default Destination;