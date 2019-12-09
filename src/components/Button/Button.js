import React from 'react';
import './Button.css';

const button = (props) => {
    return (
        <div className="Button">
            <button type="button" class>{props.name}</button>
        </div>
    )
}

export default button;