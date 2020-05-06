import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Tile from './components/UI/Tile/Tile';
import Thermometer from './components/UI/Thermometer/Thermometer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Happy Index */}
      <Tile title='Happy Doggie'>
        <Thermometer />
      </Tile>
      {/* Food */}
      {/* Water */}
      {/* Ear Scratches */}
      {/* Distance Walked */}
      {/* Tired-o-meter */}
      {/* Nearby Cats */}
    </div>
  );
}

export default App;
