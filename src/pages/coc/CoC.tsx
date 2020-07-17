import React,{useState} from 'react';

import Status from './Status';
import San from './San';
import Skill from './Skill';
import Combat from './Combat';
import Belongings from './Belongings';
import Personal from './Personal';


import './CoC.css';

import "./../../dbtype/cocCharacter";

import initialState from "./initialStatus";

const Database = require("nedb");
let db = new Database({ filename: "./../../localdb/cocCharacters.db", autoload: true });


const CoC = () => {
    const [state,setState] = useState(initialState)
    return (
        <div className="CoC">
        <h1> CoC </h1>
        <Status status={state["statuses"]} stateFunc={setState}/>
        <San />
        <Skill skill={state["skills"]}/>
        <Combat />
        <Belongings />
        <Personal />
        </div>

    )
}

export default CoC;