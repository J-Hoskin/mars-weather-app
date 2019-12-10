import React, {Component} from 'react';
import axios from 'axios';
import './Weather.css';
import Header from '../../components/Header/Header';
import Divider from '../../components/Divider/Divider';
import Reading from '../../components/Reading/Reading';
import SolSelector from '../../components/SolSelector/SolSelector';

// 4qJxMS7k6ItqFR89hCkzPFrKkhuSPScN9oXRfgxb

class Weather extends Component {
    state = {
        fullAPIData: [
        ],
        sols: [
        ],
        selectedSol: {
            solNumber: 0,
            HWS: 0,
            AT: 0,
            PRE: 0
        }
    }

    componentDidMount() {
        // Pull 7 sols
        axios.get('https://api.nasa.gov/insight_weather/?api_key=4qJxMS7k6ItqFR89hCkzPFrKkhuSPScN9oXRfgxb&feedtype=json&ver=1.0')
            .then((response) => {
                // handle success
                this.setState({sols: response.data.sol_keys});
                this.setState({fullAPIData: response.data});
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    updateSelectedSol = (event) => {
        const updatedSolNumber = event.target.value;
        const updatedSelectedSol = {
            solNumber: updatedSolNumber,
            HWS: Math.round(this.state.fullAPIData[updatedSolNumber].HWS.av * 100) / 100,
            AT: Math.round(this.state.fullAPIData[updatedSolNumber].AT.av * 100) / 100,
            PRE: Math.round(this.state.fullAPIData[updatedSolNumber].PRE.av * 100) / 100
        }

        this.setState({selectedSol: updatedSelectedSol})
    }

    

    render() {
        return (
            <div className = "Weather">
                <Header pageName = "Sol" />
                <SolSelector sols={this.state.sols} updateSelectedSol={this.updateSelectedSol}/>
                <Divider />
                <h2>Weather</h2>
                <div className = "Readings">
                    <Reading measurement={this.state.selectedSol.HWS} unit="mph"/>
                    <Reading measurement={this.state.selectedSol.AT} unit="&#8451;"/>
                    <Reading measurement={this.state.selectedSol.PRE} unit="pa"/>
                </div>
            </div>
        )
    }
}

export default Weather;