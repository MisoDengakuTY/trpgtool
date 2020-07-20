import React,{useState,createContext} from 'react';

import Status from './Status';
import San from './San';
import Skill from './Skill';
import Combat from './Combat';
import Belongings from './Belongings';
import Personal from './Personal';


import './CoC.css';

import "./../../dbtype/cocCharacter";

import initialState from "./initialStatus";
import { CoCCharacterType } from '../../dbtype/cocCharacter';


const Database = require("nedb");
let db = new Database({ filename: "./../../localdb/cocCharacters.db", autoload: true });

interface ContextType  {
    characterdata : CoCCharacterType,
    setCharacterData : React.Dispatch<React.SetStateAction<CoCCharacterType>>
}


export const CharacterData = createContext({} as ContextType)

const CoC = () => {
    const [characterdata,setCharacterData] = useState(initialState)
    const value = {characterdata,setCharacterData};
    
    return (
        <div className="CoC">
        <h1> CoC </h1>
        <CharacterData.Provider value={value} >
        <Status />
        <San />
        <Skill/>
        <Combat />
        <Belongings />
        <Personal />
        </CharacterData.Provider>
        </div>

    )
}

export default CoC;