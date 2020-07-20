import React,{useState,useContext} from 'react';
import {Input} from 'rsuite';

import {SkillType} from "./../../dbtype/cocCharacter";
import {CharacterData} from './CoC';

interface skill{
    name : String,
    key : string,
    init : number,
    job : number | null,
    interest : number | null,
    growth : number | null,
    other : number | null,
    sum : number | null,
}



const allSkill : Array<skill> = [
    {name : "回避", key : "dodge",init : 0, job : 0, interest : 0, growth : 0, other : 0, sum : 0}, // Dexからinit決めるように変更
    {name : "キック", key : "kick",init : 25, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "組付き", key : "grapple",init : 25,job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "こぶし", key : "punch",init : 50, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "頭突き", key : "headButt",init : 10, job : 0, interest : 0, growth : 0, other : 0, sum : 0}, 
    {name : "投擲", key : "throw",init : 25, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "マーシャルアーツ", key : "martialArts",init : 1, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "拳銃", key : "handgun",init : 20, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "サブマシンガン", key : "submachineGun",init : 15, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "ショットガン", key : "shotgun",init : 30, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "マシンガン", key : "machineGun",init : 15, job : 0, interest : 0, growth : 0, other : 0, sum : 0}, 
    {name : "ライフル", key : "rifle",init : 25, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
]

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

const Skill: React.FC = () => {
    const {characterdata,setCharacterData, diceRollHandler} = useContext(CharacterData)

    const showSkill = characterdata["skills"].map(t => {
        const skillSum = undefinedAdd(t["initialPoint"],undefinedAdd(t["jobPoint"],undefinedAdd(t["interestPoint"],undefinedAdd(t["growthPoint"],t["other"]))))
        return (
        <tr key={t.skillId}>

            {/* 技能名をクリックすると技能ダイスロールが走るようにする */}
            <td onClick={() => {diceRollHandler(1, 100, `《${t["skillName"]}》の技能ロール`, skillSum) }}>{t["skillName"]} </td>
            
            <td> {t["initialPoint"]} </td>
            <td> <Input value={undefined2zero(t["jobPoint"])} onChange={
                (value) => {
                    let insert
                    if(isNaN(parseInt(value,10)) == false){
                        insert = parseInt(value,10)
                    }else{
                        insert = undefined
                    }
                    const replace : SkillType = {   
                    "skillId" : t["skillId"],
                    "skillName" : t["skillName"],
                    "initialPoint" : t["initialPoint"],
                    "jobPoint" : insert,
                    "interestPoint" : t["interestPoint"],
                    "growthPoint" : t["growthPoint"],
                    "other": t["other"]
                    }
                    let newSkill = {...characterdata}
                    newSkill["skills"][t["skillId"]] = replace
                    setCharacterData(newSkill)
                } 
                
                }  /> </td>

                <td> <Input value={undefined2zero(t["interestPoint"])} onChange={
                (value) => {
                    let insert
                    if(isNaN(parseInt(value,10)) == false){
                        insert = parseInt(value,10)
                    }else{
                        insert = undefined
                    }
                    const replace : SkillType = {   
                    "skillId" : t["skillId"],
                    "skillName" : t["skillName"],
                    "initialPoint" : t["initialPoint"],
                    "jobPoint" : t["jobPoint"],
                    "interestPoint" : insert,
                    "growthPoint" : t["growthPoint"],
                    "other": t["other"]
                    }
                    let newSkill = {...characterdata}
                    newSkill["skills"][t["skillId"]] = replace
                    setCharacterData(newSkill)
                } 
                
                }  /> </td> 

                <td> <Input value={undefined2zero(t["growthPoint"])} onChange={
                (value) => {
                    let insert
                    if(isNaN(parseInt(value,10)) == false){
                        insert = parseInt(value,10)
                    }else{
                        insert = undefined
                    }
                    const replace : SkillType = {   
                    "skillId" : t["skillId"],
                    "skillName" : t["skillName"],
                    "initialPoint" : t["initialPoint"],
                    "jobPoint" : t["jobPoint"],
                    "interestPoint" : t["interestPoint"],
                    "growthPoint" : insert,
                    "other": t["other"]
                    }
                    let newSkill = {...characterdata}
                    newSkill["skills"][t["skillId"]] = replace
                    setCharacterData(newSkill)
                } 
                
                }  /> </td> 
                
                <td> <Input value={undefined2zero(t["other"])} onChange={
                (value) => {
                    let insert
                    if(isNaN(parseInt(value,10)) == false){
                        insert = parseInt(value,10)
                    }else{
                        insert = undefined
                    }
                    const replace : SkillType = {   
                    "skillId" : t["skillId"],
                    "skillName" : t["skillName"],
                    "initialPoint" : t["initialPoint"],
                    "jobPoint" : t["jobPoint"],
                    "interestPoint" : t["interestPoint"],
                    "growthPoint" : t["growthPoint"],
                    "other": insert
                    }
                    let newSkill = {...characterdata}
                    newSkill["skills"][t["skillId"]] = replace
                    setCharacterData(newSkill)
                } 
                
                }  /> </td>
            <td>{skillSum}</td>
        </tr>)
    })
    


    return(
        <div>
        <table className = "skillTable">
        <th>技能</th>
        <th>初期値</th>
        <th>職業P</th>
        <th>興味P</th>
        <th>成長分</th>
        <th>その他</th>
        <th>合計</th>    
        {showSkill}
        </table>
        </div>
    )
}

export default Skill