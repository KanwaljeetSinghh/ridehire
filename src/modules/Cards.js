import { useState } from "react";
import Checkbox from "./Checkbox";
import Card from "./Card";
import styles from '../css/data-populate.module.css';

function Cards(){
    const [showBooked,setShowBooked] = useState(true);

    const handler = () =>{
        setShowBooked(prev => !prev);
    }
    return (
        <>
            <div className="col-12 d-flex d-align-center d-justify-space-between mt-4 d-flex-wrap">
                <div className="col-m-12">
                    <h3 className="d-flex l-26 text-secondary f-600 neg-letter-spacing">Houston, TX, United States</h3>
                    <span className="font-12 neg-letter-spacing text-primary f-600"> 300+ <span className="f-400 text-secondary op-06"> Results found</span></span>
                </div>
                <div className="d-flex d-align-center pt-1 pb-1 pl-2 pr-1 rounded-10 col-m-12 mt-m-1 pr-m-2 d-justify-space-between" style={{backgroundColor:"#F0F8F8"}}>
                    <span className="mr-15 font-14 l-26 text-secondary">Show booked vehicles</span>
                    <Checkbox handler={handler}></Checkbox>
                </div>
            </div>
            <div className={`col-12 mt-2 d-grid ${styles["cards__wrapper"]}`}>
                <Card></Card>   
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>   
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>   
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </>
    )
}

export default Cards;