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
            <p>Spoilers, it is cold</p>
            <Divider />
            
            <div className = "Buttons">
                <Link to="/weather">
                    <Button name = "Enter" />
                </Link>

                <Link to="/credits">
                    <Button name = "Credits" />
                </Link>
            </div>
            
        </div>
    )
}

export default menu;