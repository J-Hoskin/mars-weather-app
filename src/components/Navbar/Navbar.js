import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import HomeIcon from '../../images/homeIcon.svg'

const navbar = () => {
    return (
        <Link to="" >
            <div className = "NavBar">
                <img src={HomeIcon} alt="home icon" height="28px"/>
            </div>
        </Link>
    )
}

export default navbar;