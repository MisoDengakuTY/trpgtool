import React from 'react';

import DiceLog from './DiceLog';
import DiceRoll from './DiceRoll';



const Dice = () => {
    return (
        <div className="Dice">
        <h1> Dice </h1>
        <DiceRoll />
        <DiceLog />
        </div>
    )
}

export default Dice;