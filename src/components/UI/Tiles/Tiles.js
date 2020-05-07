import React from 'react';
import classes from './Tiles.module.css';

import Tile from '../Tile/Tile';
import Happiness from '../../../containers/Happiness/Happiness';
import Food from '../../Food/Food';

const Tiles = (props) => {
    return (
        <div className={classes.Tiles}>
            <Tile title='Happy Doggie'>
                <Happiness />
            </Tile>
            <Tile title='Food'>
                <Food />
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

export default Tiles;