import React,{useContext} from 'react';
import { InputNumber} from 'rsuite';
import {StatusType} from "./../../dbtype/cocCharacter";
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


const Status:React.FC = () =>{
    const {characterdata,setCharacterData} = useContext(CharacterData)

    const styles = { 
        marginBottom: 10 }
    
    const head = characterdata["statuses"].map(t => <th>{t["statusName"]}</th>);
    const showInitStatus = characterdata["statuses"].map(t => <td>
        <InputNumber style={styles} value={undefined2zero(t["statusPoint"])} onChange={
        (value : any) => {
            let insert
            if(isNaN(parseInt(value,10)) == false){
                insert = parseInt(value,10)
            }else{
                insert = undefined
            }
            const replace : StatusType = {
                "statusId" : t["statusId"],
                "statusName": t["statusName"],
                "statusPoint": insert,
                "otherFluctuation": t["otherFluctuation"],
                "temporaryFluctuation": t["temporaryFluctuation"],
                "max" : t["max"],
                "min" : t["min"]
            }
            let newStatus = {...characterdata}
            newStatus["statuses"][t["statusId"]] = replace
            
            newStatus["skills"][0]["initialPoint"] = 
            2 * undefinedAdd(newStatus["statuses"][3]["statusPoint"],
            undefinedAdd(newStatus["statuses"][3]["otherFluctuation"],newStatus["statuses"][3]["temporaryFluctuation"]))
                        
            setCharacterData(newStatus)
        }
        } min={t["min"]} max={t["max"]}/>
        </td>)

    const showOtherStatus = characterdata["statuses"].map(t => 
    <td><InputNumber style={styles} value={undefined2zero(t["otherFluctuation"])} onChange={
        (value : any) => {
            let insert
            if(isNaN(parseInt(value,10)) == false){
                insert = parseInt(value,10)
            }else{
                insert = undefined
            }
            const replace : StatusType = {
                "statusId" : t["statusId"],
                "statusName": t["statusName"],
                "statusPoint": t["statusPoint"],
                "otherFluctuation": insert,
                "temporaryFluctuation": t["temporaryFluctuation"],
                "max" : t["max"],
                "min" : t["min"]
            }
            let newStatus = {...characterdata}
            newStatus["statuses"][t["statusId"]] = replace

            newStatus["skills"][0]["initialPoint"] = 
            2 * undefinedAdd(newStatus["statuses"][3]["statusPoint"],
            undefinedAdd(newStatus["statuses"][3]["otherFluctuation"],newStatus["statuses"][3]["temporaryFluctuation"]))
            

            setCharacterData(newStatus)
        }
    }/> </td>)

    const showTemporaryStatus = characterdata["statuses"].map(t => 
        <td><InputNumber style={styles} value={undefined2zero(t["temporaryFluctuation"])} onChange={
            (value : any) => {
                let insert
                if(isNaN(parseInt(value,10)) == false){
                    insert = parseInt(value,10)
                }else{
                    insert = undefined
                }
                const replace : StatusType = {
                    "statusId" : t["statusId"],
                    "statusName": t["statusName"],
                    "statusPoint": t["statusPoint"],
                    "otherFluctuation": t["otherFluctuation"],
                    "temporaryFluctuation": insert,
                    "max" : t["max"],
                    "min" : t["min"]
                }
                let newStatus = {...characterdata}
                newStatus["statuses"][t["statusId"]] = replace

                newStatus["skills"][0]["initialPoint"] = 
                2 * undefinedAdd(newStatus["statuses"][3]["statusPoint"],
                undefinedAdd(newStatus["statuses"][3]["otherFluctuation"],newStatus["statuses"][3]["temporaryFluctuation"]))
                
                setCharacterData(newStatus)
            }
        }/> </td>)
    return(
    <div className = "statusTable">

    <table>
    <th className="tableLeft">  </th>
    {head}
    <tr>    

    <td>初期値</td>
    {showInitStatus}
    </tr>
    
    <tr>
    <td className="tableLeft">その他増減</td>
    {showOtherStatus}
    </tr>
    
    <tr>
    <td className="tableLeft">一時的増減</td>
    {showTemporaryStatus}
    </tr>
    
    <tr>
    <td className="tableLeft">現在値</td>
    {characterdata["statuses"].map(t => <td> {Math.max(0,undefinedAdd(t["statusPoint"],undefinedAdd(t["otherFluctuation"],t["temporaryFluctuation"])))} </td>)}
    </tr>

    </table>
    </div> 
    )
}

export default Status;

//number+'' => string