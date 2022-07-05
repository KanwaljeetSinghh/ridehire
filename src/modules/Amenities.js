import { Fragment, useState } from 'react';
import AmanityButton from './Amanitiy-Button';
function Amenities(){

    

    return(
        <Fragment>
            <div className='mt-2 d-flex d-flex-wrap'>
                <AmanityButton value="Bathroom"></AmanityButton>
                <AmanityButton value="Dance Pole"></AmanityButton>
                <AmanityButton value="AC"></AmanityButton>
                <AmanityButton value="Fog Machine"></AmanityButton>
                <AmanityButton value="Child Seats"></AmanityButton>
                <AmanityButton value="Power Outlets"></AmanityButton>
                <AmanityButton value="Bottled Water"></AmanityButton>
                <AmanityButton value="Wifi"></AmanityButton>
                <AmanityButton value="Seatbelts"></AmanityButton>
                <AmanityButton value="Heat"></AmanityButton>
            </div>
        </Fragment>
    )
}

export default Amenities;