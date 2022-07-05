import FilterByKeyword from "./Filter-By-Keyword";
import Amenities from "./Amenities";
import VehicleColors from "./Vehicle-Colors";
import RadioButtons from "./RadioButtons";
import RangeSlider from "./Range-Slider";
import SortBy from "./SortBy";

function FilterModal(props){

    const handler = (e) =>{
        if(e.target.classList.contains("modal__container")){
            props.handler();
        }
    }

    return(
        <div className="modal__container d-flex d-align-center d-justify-center p-m-2" onClick={handler}>
            <div className="modal ">
                <ul className="p-0 m-0 ">
                    <li className="p-3 d-flex d-flex-wrap d-align-center d-justify-start border-bottom pb-2">
                        <h2 className="col-12 d-flex d-align-center text-secondary l-26 f-500 neg-letter-spacing-04">
                            Filter by Keyword
                        </h2>
                        <FilterByKeyword></FilterByKeyword>
                    </li>

                    <li className="p-3 d-flex d-flex-wrap d-align-center d-justify-start border-bottom pb-2">
                        <h2 className="col-12 d-flex d-align-center text-secondary l-26 f-500 neg-letter-spacing-04">
                           Sort By
                        </h2>
                        <SortBy />
                    </li>

                    <li className="p-3 d-flex d-flex-wrap d-align-center d-justify-start border-bottom pb-2">
                        <h2 className="col-12 d-flex d-align-center text-secondary l-26 f-500 neg-letter-spacing-04">
                            Passenger Count
                        </h2>
                        <RadioButtons></RadioButtons>
                    </li>

                    <li className="p-3 d-flex d-flex-wrap d-align-center d-justify-start border-bottom pb-2">
                        <h2 className="col-12 d-flex d-align-center text-secondary l-26 f-500 neg-letter-spacing-04 ">
                            Vehicle Year
                        </h2>
                        <span>&nbsp;</span>
                        <RangeSlider classes="mt-4 mb-4" marker="true" min="1920" max="2022"></RangeSlider>
                    </li>

                    <li className="p-3 d-flex d-flex-wrap d-align-center d-justify-start border-bottom pb-2">
                        <h2 className="col-12 d-flex d-align-center text-secondary l-26 f-500 neg-letter-spacing-04">
                            Amenities
                        </h2>
                        <Amenities></Amenities>
                    </li>

                    

                    <li className="p-3 d-flex d-flex-wrap d-align-center d-justify-start border-bottom pb-2">
                        <h2 className="col-12 d-flex d-align-center text-secondary l-26 f-500 neg-letter-spacing-04">
                            Vehicle Colors
                        </h2>
                        <VehicleColors></VehicleColors>
                    </li>

                    <li className="mt-3 p-3 d-flex d-flex-wrap d-align-center d-justify-space-between pb-2">
                        <h4 className="clear-button l-26 f-600">Clear</h4>
                        <button className="btn btn-primary rounded-50">Show 300+ Result</button>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
export default FilterModal;