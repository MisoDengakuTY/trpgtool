import React from 'react';
import { InputNumber, Input} from 'rsuite';

interface skill{
    name : String,
    init : Number,
    job : Number | null,
    interest : Number | null,
    growth : Number | null,
    other : Number | null,
    sum : Number | null,
}

const allSkill : Array<skill> = [
    {name : "回避", init : 0, job : 0, interest : 0, growth : 0, other : 0, sum : 0}, // Dexからinit決めるように変更
    {name : "キック", init : 25, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "組付き", init : 25, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
    {name : "こぶし", init : 50, job : 0, interest : 0, growth : 0, other : 0, sum : 0},
]


const Skill = () => {

    const showSkill = allSkill.map(t =>
    <tr>
    <td> {t.name} </td>
    <td> {t.init} </td>
    <td> {t.job} </td>
    <td> {t.interest} </td> 
    <td> {t.growth} </td>
    <td> {t.other} </td>
    <td> {t.sum} </td>
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