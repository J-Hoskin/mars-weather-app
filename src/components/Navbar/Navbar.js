import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '../../images/home-icon.png'

const navbar = () => {
    return (
        <Link to="" >
            <div className = "NavBar">
                <img src={HomeIcon} alt="home icon" width="28px" height="28px"/>
            </div>
        </Link>
    )
}

export default navbar;