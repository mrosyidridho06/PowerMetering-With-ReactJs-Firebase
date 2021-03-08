import React from "react";
import '../style/main.css';
import Navb from '../components/navbar'
import chartCospi from '../charts/chartCospi'


export default function cospi() {
    return (
        <>
        <Navb />
        <div className="container">
            Cospi
            <chartCospi />
        </div>
        </>
    );
}

