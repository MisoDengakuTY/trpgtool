import React,{useState,createContext} from 'react';

import Status from './Status';
import StatusChart from './StatusChart';
import San from './San';
import Skill from './Skill';

import Combat from './Combat';
import Belongings from './Belongings';
import Personal from './Personal';
import {createDicerollHandler, DiceResultModal, diceState, diceRollHandler} from '../dice/DiceRoll'

import './CoC.css';

import "./../../dbtype/cocCharacter";

import initialState from "./initialStatus";
import { CoCCharacterType } from '../../dbtype/cocCharacter';

import axios from 'axios';
import {Button} from 'rsuite';

const Database = require("nedb");
let db = new Database({ filename: "./../../localdb/cocCharacters.db", autoload: true });

interface ContextType  {
    characterdata : CoCCharacterType,
    setCharacterData : React.Dispatch<React.SetStateAction<CoCCharacterType>>,
    diceRollHandler: diceRollHandler
}


export const CharacterData = createContext({} as ContextType)

const CoC = () => {

    // ダイスロール結果表示用のState
    const [state, setState] = useState<diceState>({show:false, diceResult: []});
    const diceRollHandler = createDicerollHandler((res, log, text, limit) => {
        setState({show: true, diceLog: log, diceResult: res, text: text, limit : limit})
    });

    const [characterdata,setCharacterData] = useState(initialState)
    const value = {characterdata,setCharacterData,diceRollHandler};
    
    return (
        <div className="modal-container">
            <div className="CoC">
                <h1> CoC </h1>
                <CharacterData.Provider value={value} >
                    <Status />
                    <StatusChart />
                    <San />
                    <Skill />
                    <Combat />
                    <Belongings />
                    <Personal />
                    <DiceResultModal size="xs" resultStyle="(xDx)=>numbers(sum)<=(limit):(result)" diceState={state} onHide={() => setState({...state, show: false})} />
                    <Button onClick={() => {
                        axios.get(`http://localhost:3001/cocCharacter/0`)
                        .then(res => {
                        const character = res.data;
                        setCharacterData(character[0]);
                        })   
                        }} >Load test</Button>
                </CharacterData.Provider>
            </div>
        </div>
    )
}

export default CoC;