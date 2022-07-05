import CircleSmall from '../icons/CircleSmall';
import SmallDownArrow from "../icons/SmallDownArrow";
import TwoBar  from "../icons/TwoBar";
import Plus from "../icons/Plus";
import Timer from "../icons/Timer";
import Passenger from "../icons/Passengers";
import Compass from '../icons/Compass';
function StopPointsShow(props){
    
    const marginStyle={
        marginLeft:"5px",
    }
    const style={
        margin:"0 5px",
    }
    
    if(props.type==0){
        return (
            <li className={`grid-stop l-40 border-bottom pb-1 f-500 ${props.classes}`} >  
                <div className="d-flex d-align-center">
                    
                    <span className="font-12 font-m-10 l-16" >4620 North Braeswood Blvd</span>
                </div>
                <div className='d-flex d-align-center d-justify-center d-flex-column'>
                <span role="button" className="col-12 bg-secondary d-flex d-align-center d-justify-center rounded-50 text-white font-10 font-s-10 l-25" onClick={props.handler} >
                    <CircleSmall color="white"></CircleSmall>
                    <span style={style}>2 stops</span>
                    <SmallDownArrow></SmallDownArrow>
                </span>
                </div>
            </li>
        );   
    }
    else if(props.type==1){
        return (
            
            <li className={`grid-stop l-40 border-bottom f-500 ${props.classes}`}>
                <span className="font-12 l-13 ">4620 North Braeswood Blvd</span>
                <div className="d-flex d-align-center d-justify-end">
                    <TwoBar></TwoBar>
                    <span className="stop-circle-cross d-flex d-align-center d-justify-center ml-2">
                        <Plus color="#FF4343"/>
                    </span>
                </div>
            </li>
        );
    }
    else if(props.type==2){
        return (
            <li className={`grid-stop  border-bottom f-500 ${props.classes}`}>  
                <div className="d-flex d-align-center">
                    <span className="font-12 l-40" >4620 North Braeswood Blvd</span>
                </div>
                
            </li>
        );   
    }
    else if(props.type==3){
        return (
            <li className={` d-flex d-justify-space-between border-top pt-1 l-40 ${props.classes}`}>
                <div className="d-flex d-align-center  border-right pr-1 ">
                    <Timer></Timer>
                    <span className="font-12 font-s-10 l-16" style={marginStyle}>Dec 25 , 10:00a - 5:00p</span>
                </div>
                <div className="d-flex d-align-center d-justify-end ml-1 ">
                    <Passenger />
                    <span className="font-12 font-s-10 l-16" style={marginStyle}>11-20 Passengers</span>
                </div>
            </li>
        )
    }
}

export default StopPointsShow;