import React from 'react';
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
            
            <Button name = "Enter" />
            <Button name = "Credits" />
        </div>
    )
}

export default menu;