import React from 'react';
import './Reading.css';

const reading = (props) => {
    return (
        <div className = "Reading">
            <img height="28" src={props.icon} alt="Reading Icon" />
            <p>{props.measurement} <span className="MeasurementUnit">{props.unit}</span></p>
        </div>
    )
}

export default reading;