import styles from '../css/filters.module.css';
import RangeSlider from './Range-Slider';
import BarChartModule from './Bar-Chart-module';

function PriceModal(props){
    const handler = (e) =>{
        console.log(e.target.classList.contains("modal"));
        if(e.target.classList.contains("modal__container") || e.target.classList.contains("container")){
            props.handler();
        }
        e.stopPropagation();
    }

    return(
        <div className="modal__container d-flex d-align-start d-justify-start " onClick={handler}>
            <div className="container" onClick={handler}>
                <div className="modal price__modal mt-2 p-relative pr-3 pl-3 pt-3 rounded-10">
                    <h2 className="l-26 f-500 text-secondary ">Price Range</h2>
                    <h5 className="l-26 f-400 text-secondary op-07 mt-15 mb-3"> The average hourly price is <span className="text-secondary f-600 op-1">$143</span> </h5>
                    
                    <BarChartModule classes="mt-7"></BarChartModule>
                    <RangeSlider classes="custom-range-slider" labels="true" min="1" max="1000"></RangeSlider>

                   
                    <div className="mt-3 d-flex d-flex-wrap d-align-center d-justify-space-between pb-2">
                        <h4 className="clear-button l-26 f-600">Clear</h4>
                        <button className="btn btn-primary rounded-50">Show 300+ Result</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PriceModal;