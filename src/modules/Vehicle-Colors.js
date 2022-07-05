import VehicleColorButtons from './Vehicle-Color-Buttons';
import styles from '../css/filters.module.css';


function VehicleColors(props){
   
   
    return (
        <div class={`col-12 mt-2 d-grid ${styles["vehicle__colors"]}`}>
            <VehicleColorButtons color="#ED2F2E" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#F8A42D" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#0FB678" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#2CA3F2" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#E78C0D" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#FFFFFF" fillcolor="black"></VehicleColorButtons>
            <VehicleColorButtons color="#272729" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#838384" fillcolor="white"></VehicleColorButtons>
            <VehicleColorButtons color="#DADADA" fillcolor="black"></VehicleColorButtons>
            <VehicleColorButtons color="linear-gradient(180deg, #D723D3 0%, #613BF8 100%)" fillcolor="white"></VehicleColorButtons>
            
        </div>
    );
}
export default VehicleColors;