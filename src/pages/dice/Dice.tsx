import React from 'react';
import {Button} from 'rsuite'

import DiceLog from './DiceLog';
import DiceRoll from './DiceRoll';
import { useState } from 'react';
import DiceLogDB from './model/diceLogDB';


const Dice = () => {
    const [logs, setLogs] = useState<DiceLogDB[]>([])
    const [newToPast, setOrdering] = useState<boolean>(false);

    return (
        <div className="Dice">
        <h1> Dice </h1>
        <DiceRoll onRoll={(log: DiceLogDB) => {setLogs(logs.concat([log]))}} />
        <Button onClick={() => setOrdering(!newToPast)}>{newToPast ? "古い順" : "新しい順"}</Button>
        <DiceLog logs={logs} newToPast={newToPast}/>
        </div>
    )
}

export default Dice;
