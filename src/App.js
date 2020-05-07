import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Tiles from './components/UI/Tiles/Tiles';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Tiles />
    </div>
  );
}

export default App;
