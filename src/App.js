import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Tiles from './components/UI/Tiles/Tiles';
import Tutorial from './containers/Tutorial/Tutorial';

function App() {
  const showTutorial = useSelector(state => state.showTutorial);

  return (
    <div className="App">
      <Header />
      <Tiles />
      {showTutorial && <Tutorial />}
    </div>
  );
}

export default App;
