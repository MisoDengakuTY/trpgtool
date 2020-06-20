import React from 'react'
import {Timeline} from 'rsuite'
import diceLogDB from "./model/diceLogDB"
import Dice from './Dice'

interface DiceLogProp {
    logs: diceLogDB[],
    newToPast: boolean;
}

const DiceLog = (prop: DiceLogProp) => {

    // ログデータの一部文字列に変換する関数
    const num2str = (num: number) => ('00' + num).slice(-2);
    const date2str = (date: Date) => `${num2str(date.getHours())}:${num2str(date.getMinutes())}:${num2str(date.getSeconds())}`
    const result2str = (results: number[]) => results.map(x => '' + x).reduce((s, x) => s + " " + x); 
    
    // ログデータをコンポーネントに変換する関数
    const log2component = (l : diceLogDB) => 
    (<Timeline.Item key={l.id}>{date2str(l.rollAt)} {l.count}D{l.dicesize} {"=>"} {l.resultSum()}({result2str(l.results)})</Timeline.Item>)

    const sortedLog = prop.newToPast ? prop.logs.sort((x, y) => y.rollAt.getTime() - x.rollAt.getTime())
                                     : prop.logs.sort((x, y) => x.rollAt.getTime() - y.rollAt.getTime());
    
    const logComponents = sortedLog.map(x => log2component(x));

    return(
        <Timeline>
            {logComponents}
        </Timeline>
    )
}

export default DiceLog