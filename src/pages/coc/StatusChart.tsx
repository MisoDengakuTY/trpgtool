import React,{useContext} from 'react';
import {CharacterData} from './CoC';
import {Radar} from 'react-chartjs-2';


const undefinedAdd = (a : number | undefined, b : number | undefined) => {
    if(a === undefined){
        a = 0
    }
    if(b === undefined){
        b = 0
    }
    return a + b;
}

const StatusChart : React.FC = () => {
    
    const {characterdata,setCharacterData} = useContext(CharacterData)
    
    
    let data = {labels: characterdata["statuses"].map(t => t["statusName"]),
    datasets: [
        {
        label: 'San 現在値',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data:characterdata["statuses"].map(t => undefinedAdd(t["statusPoint"],undefinedAdd(t["otherFluctuation"],t["temporaryFluctuation"])))
    }]
    };

    return(
    <div>
        <Radar data={data} />
    </div>
    );
}

export default StatusChart