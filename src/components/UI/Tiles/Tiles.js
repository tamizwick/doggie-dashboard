import React from 'react';
import classes from './Tiles.module.css';

import Tile from '../Tile/Tile';
import Happiness from '../../../containers/Happiness/Happiness';
import Food from '../../Food/Food';
import Water from '../../Water/Water';
import EarScratches from '../../../containers/EarScratches/EarScratches';

const Tiles = (props) => {
    return (
        <div className={classes.Tiles}>
            <Tile title='Happy Doggie'>
                <Happiness />
            </Tile>
            <Tile title='Food'>
                <Food />
            </Tile>
            <Tile title='Water'>
                <Water />
            </Tile>
            <Tile title='Ear Scratches'>
                <EarScratches />
            </Tile>
            {/* Ear Scratches */}
            {/* Distance Walked */}
        </div>
    );
}

export default Tiles;