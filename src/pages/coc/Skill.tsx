import React from 'react';
import { InputNumber, Input} from 'rsuite';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//id 1だけ呼ぶ
const GET_SKILL = gql`
    query MyQuery {
  CoCSkills_by_pk(id: 1) {
    accounting
    anthropology
    archaeology
    art
    astronomy
    bargain
    biology
    chemistry
    climb
    computer
    conceal
    craft
    creditRating
    cthulhuMythos
    disguise
    dodge
    driveAutomobile
    electricalRepair
    fastTalk
    firstAid
    geology
    grapple
    handgun
    headButt
    hide
    history
    jump
    kick
    law
    libraryUse
    listen
    locksmith
    machineGun
    martialArts
    mechanicalRepair
    medicine
    naturalHistory
    navigate
    occult
    operateHeavyMachine
    otherLanguage
    ownLanguage
    persuade
    pharmacy
    photography
    physics
    pilot
    psychoanalysis
    psychology
    punch
    ride
    rifle
    shotgun
    sneak
    spotHidden
    submachineGun
    swim
    throw
    track
  }
}

`

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


const Skill = () => {


    const { loading, error, data } = useQuery(GET_SKILL);

    if (loading) return <p>Loading...</p>; // fetch
    if (error) return <p>fuck you... {error.message} </p>; //error
    
    const showSkill = allSkill.map(t =>
    <tr>
    <td> {t.name} </td>
    <td> {t.init} </td>
    <td> {t.job} </td>
    <td> {t.interest} </td> 
    <td> {t.growth} </td>
    <td> {t.other} </td>
    <td> {data.CoCSkills_by_pk[t.key]} </td>
    </tr>
    )


    return(
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
    )
}

export default Skill