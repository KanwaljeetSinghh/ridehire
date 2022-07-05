import styles from '../css/marker.module.css';
import {InfoWindow } from '@react-google-maps/api';
function LocationMarker(props){
    return (
        <InfoWindow>
        <div className={`${styles["markerContainer"]}`}>
            $150/Hr
        </div>
        </InfoWindow>
    )
}

export default LocationMarker;