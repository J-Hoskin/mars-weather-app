import React, { Component } from 'react';
import './SolSelector.css';

class Button extends Component {
    componentDidMount(){
    }

    render() {
        return (
            <div className="SolSelector">
                <select onChange={this.props.updateSelectedSol}>
                    <option value="" disabled selected>Select a Sol</option>
                    {this.props.sols.map((sol, key) => {
                        return (
                            <option key={key} value={sol}>{sol}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default Button;