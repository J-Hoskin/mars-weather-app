import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Credits from '../components/Credits/Credits';
import NavBar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import Weather from './Weather/Weather';

const App = () => {
  return (
    <div className="App">
      <div className = "Wrapper">
        <NavBar />
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/credits" component={Credits} />
          <Route path="" exact component={Menu} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
