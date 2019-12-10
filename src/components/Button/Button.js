import React from 'react';
import './Button.css';

const button = (props) => {
    return (
        <div className="Button">
            <button type="button">{props.name}</button>
        </div>
    )
}

export default button;