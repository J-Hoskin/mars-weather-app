import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import Button from '../Button/Button';

const menu = () => {
    return (
        <div className = "Menu">
            <Header pageName = "Weather on Mars" />
            <p>Spoilers, it is going to be a cold one</p>
            <Divider />
            
            <Link to="/weather">
                <Button name = "Enter" />
            </Link>

            <Link to="/credits">
                <Button name = "Credits" />
            </Link>
        </div>
    )
}

export default menu;