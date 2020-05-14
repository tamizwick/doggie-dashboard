import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Tiles from './components/UI/Tiles/Tiles';
import Tutorial from './containers/Tutorial/Tutorial';

function App() {
  return (
    <div className="App">
      <Header />
      <Tiles />
      <Tutorial />
    </div>
  );
}

export default App;
