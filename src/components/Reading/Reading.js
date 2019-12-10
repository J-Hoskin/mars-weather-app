import React from 'react';
import './Reading.css';
import HomeIcon from '../../images/home-icon.png'

const reading = (props) => {
    return (
        <div className = "Reading">
            <img height="28" src={HomeIcon} alt="Reading Icon" />
            <p>{props.measurement} <span className="MeasurementUnit">{props.unit}</span></p>
        </div>
    )
}

export default reading;