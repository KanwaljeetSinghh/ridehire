import Compass from '../icons/Compass';
import Stops from './Stops';

function DestinationLocation(){

    const myStyle={
        backgroundImage:"url('DestinationBg.svg')",
        backgroundRepeat:"no-repeat",
        minHeight:"100px",
        backgroundSize:"contain"
    };

    return (
        <div className=" col-8 d-flex " style={myStyle}>
            <div className='col-5 d-flex  d-align-center p-3'>
                <Compass></Compass>
                <div className="ml-1 ">
                    <p className='font-12 l-12 f-500 text-grey '>Pickup Location</p>
                    <h3 className='l-40 f-600'>MidTown , HistonX..</h3>
                    <p className='font-12 l-12 f-500 '>United States</p>

                </div>
            </div>
            <div className='col-2 d-flex d-justify-center d-align-center'>
                <Stops></Stops>
            </div>
            <div className='col-5 d-flex d-justify-center d-align-center p-3'>
                <Compass></Compass>
                <div className="ml-1">
                    <p className='font-12 l-12 f-500 text-grey'>Pickup Location</p>
                    <h3 className='l-40 f-600'>MidTown , HistonX..</h3>
                    <p className='font-12 l-12 f-500 '>United States</p>
                </div>
                
            </div>
        </div>
    );
}
export default DestinationLocation;