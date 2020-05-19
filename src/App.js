import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Header from './components/Header/Header';
import Tiles from './components/UI/Tiles/Tiles';
import Tutorial from './containers/Tutorial/Tutorial';

function App() {
  const showTutorial = useSelector(state => state.showTutorial);

  return (
    <div className="App">
      <Header />
      <Tiles />
      <CSSTransition
        in={showTutorial}
        timeout={500}
        mountOnEnter
        unmountOnExit>
        <Tutorial />
      </CSSTransition>
    </div>
  );
}

export default App;
