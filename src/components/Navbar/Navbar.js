import React from 'react';
import './Navbar.css';
import HomeIcon from '../../images/home-icon.png'

const navbar = () => {
    return (
        <div className = "NavBar">
            <img src={HomeIcon} width="28px" height="28px"/>
        </div>
    )
}

export default navbar;