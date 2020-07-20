import React,{useContext} from 'react';
import { InputNumber} from 'rsuite';
import {CharacterData} from './CoC';


const undefined2zero = (i : number | undefined) => {
    if(i === undefined) {return "";}
    else {return i+'';}
}

const undefinedAdd = (a : number | undefined, b : number | undefined) => {
    if(a === undefined){
        a = 0
    }
    if(b === undefined){
        b = 0
    }
    return a + b;
}

const San : React.FC = () => {
    const styles = { 
        marginBottom: 10 ,}
    
    const {characterdata,setCharacterData} = useContext(CharacterData)
    return(
        <div>
        <table className = "sanTable"> 
        <td>SAN値</td>
        <td><InputNumber placeholder="SAN" value={undefined2zero(characterdata["san"])} 
         onChange={
            (value : any) => {
                let insert
                if(isNaN(parseInt(value,10)) == false){
                    insert = parseInt(value,10)
                }else{
                    insert = undefined
                }
                let newSan = {...characterdata}
                newSan["san"] = insert
                setCharacterData(newSan)
            }
         }
        max={
            99-undefinedAdd(characterdata["skills"][43]["initialPoint"],
            undefinedAdd(characterdata["skills"][43]["jobPoint"],
            undefinedAdd(characterdata["skills"][43]["interestPoint"],
            undefinedAdd(characterdata["skills"][43]["growthPoint"],
            characterdata["skills"][43]["other"]))))
    } min={0} /></td>
        </table>
        
        </div>
    )

}

export default San