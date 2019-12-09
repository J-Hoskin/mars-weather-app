import React from 'react';
import './App.css';
import Credits from '../components/Credits/Credits';
import NavBar from '../components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <div className = "Wrapper">
        <NavBar />
        <Credits />
      </div>
    </div>
  );
}

export default App;
