import Compass from '../icons/Compass';
import Timer from '../icons/Timer';
import Persons from '../icons/Persons';
import Magnifier from '../icons/Magnifier';

function HeaderNavs(props){

    const popUp = () =>{
        props.handler(prev => !prev);
    }
   
   
    if(!props.show){
        return <div className='col-5 col-m-12'><h5 className='header-mobile-text font-16 l-30 f-600 text-secondary d-flex d-align-center d-justify-center' onClick={popUp}> Edit your plan</h5></div>
    }
    else{
        return (
            <div className={`col-6 ml-l-5 col-m-12 text-align-center d-flex d-flex-wrap d-align-center d-justify-center border-m rounded-50 ${props.show?"op-1":"op-0"}`}>
                <div className="cursor-pointer d-flex d-align-center pl-1 pl-m-0 font-l-14 l-16 f-500 border-right border-m-none font-14 font-m-10 l-m-40" onClick={popUp}>
                    <Compass className="pt-2"></Compass>
                    <span class="ml-1">4620 North Br Erbow.</span>
                </div>
                <div className="cursor-pointer d-flex d-align-center ml-mm-2 pl-2 pl-m-0 pr-m-0 font-l-14 l-16 f-500 border-right border-m-none font-14  font-m-10  l-m-40" onClick={popUp}>
                    <Timer className="mt-1"></Timer>
                    <span class="ml-1">4620 North Br Erbow.</span>
                </div>
                <div className="d-m-none cursor-pointer d-flex d-align-center   pl-2 pr-m-0 font-14 font-l-14 l-16 f-500" onClick={popUp}>
                    <Persons className="mt-1"></Persons>
                    <span class="ml-1">14 - 25</span>
                </div>
                <a class="d-m-none btn-icon-only ml-2">
                    <Magnifier color="#FFF"></Magnifier>
                </a>
            </div>
        )
    }
    
}

export default HeaderNavs;