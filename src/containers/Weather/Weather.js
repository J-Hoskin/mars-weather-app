import React, {Component} from 'react';
import './Weather.css';
import Header from '../../components/Header/Header';
import Divider from '../../components/Divider/Divider';

class Weather extends Component {
    render() {
        return (
            <div className = "Weather">
                <Header pageName = "Weather" />
                <Divider />
            </div>
        )
    }
}

export default Weather;