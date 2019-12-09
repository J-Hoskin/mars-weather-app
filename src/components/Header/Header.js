import React from 'react';
import './Header.css';

const header = (props) => {
    return (
        <div className = "Header">
            <h1>{props.pageName}</h1>
        </div>
    )
}

export default header;