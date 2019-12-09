import React from 'react';
import './Credits.css';
import Header from '../Header/Header';
import Divider from '../Divider/Divider';

const credits = () => {
    return (
        <div className = "Credits">
            <Header pageName = "Credits" />
            <Divider />
            
            <strong>Mars with an Atmosphere Image:</strong>
            <p>
                Tomasz Wyszołmirski
                <br />
                Dabarti CGI
            </p>

            <br />

            <strong>Mars Weather Data/API:</strong>
            <p>
            NASA Jet Propulsion Laboratory and Cornell University
            </p>
        </div>
    )
}

export default credits;