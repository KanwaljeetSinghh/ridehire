import Timer from '../icons/Timer';
import MagnifierBig from '../icons/MagnifierBig';

function DestinationDate(){

    const myStyle ={
        height:"80px",
        width:"80px",
        marginLeft:"55px",
    };

    return (
        <div className="col-4 d-flex d-align-center pl-5">
            <Timer></Timer>
            <div className="ml-1 ">
                <p className='font-12 l-12 f-500 text-grey '>Pickup & drop off time</p>
                <h3 className='l-40 f-600'>Sun , June 17</h3>
                <p className='font-12 l-12 f-500 '>10:30 am to 12:45 am (6h 30m)</p>
            </div>
            <a class="btn-icon-only" style={myStyle}>
                <MagnifierBig color="#FFF"></MagnifierBig>
            </a>
        </div>
    );
}
export default DestinationDate