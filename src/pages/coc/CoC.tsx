import React from 'react';

import Status from './Status';
import San from './San';
import Skill from './Skill';
import Combat from './Combat';
import Belongings from './Belongings';
import Personal from './Personal';


import './CoC.css';

const CoC = () => {
    return (
        <div className="CoC">
        <h1> CoC </h1>
        <Status />
        <San />
        <Skill />
        <Combat />
        <Belongings />
        <Personal />
        </div>

    )
}

export default CoC;