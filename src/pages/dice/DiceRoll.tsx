import React, { useState } from 'react';
import {Button,ButtonToolbar,Modal, DrawerProps} from 'rsuite';
import diceFunc from './diceFunc'
import diceLogDB from './model/diceLogDB';
import Dice from './Dice';

interface stateType{
  size : undefined|'xs'
  show : boolean
}

interface DiceRollProp {
  onRoll : (log: diceLogDB) => void; // ダイスが振られた時に呼ばれるハンドラ
}

const DiceRoll = (prop: DiceRollProp) => {
  
  const [state, setState] = useState<diceState>({show:false, diceResult: []});
  const rollHandlerGenerator = createDicerollHandler((res, log) => {
    setState({show: true, diceResult: res})
    prop.onRoll(log);
  });
  
  return (
    <div className="modal-container">
      <ButtonToolbar>
        <Button size="lg" onClick={() => rollHandlerGenerator(1, 2)}>
          1d2
        </Button>
        <Button size="lg" onClick={() => rollHandlerGenerator(1, 3)}>
          1d3
        </Button>
        <Button size="lg" onClick={() => rollHandlerGenerator(2, 3)}>
          2d3
        </Button>
      </ButtonToolbar>

      <DiceResultModal  size="xs" diceState={state} onHide={() => setState({...state, show: false})} />
    </div>
  );
}

interface diceResultProp {
  size: "xs" | undefined;
  
  diceState: diceState;
  onHide: () => void;
  resultStyle?: "(numbers)=>sum" | "(xDx)=>numbers(sum)" | "(xDx)=>numbers(sum)<=(limit):(result)"
}

export interface diceState {
  show: boolean;
  diceResult: number[];
  diceLog?: diceLogDB;
  limit?: number;
  text? : string;
}

export type stateUpdater = (result: number[], diceLogDB: diceLogDB, text?: string, limit?: number) => void;
export type diceRollHandler = (diceCount: number, diceSize: number, text?: string, limit?: number) => void;

export function createDicerollHandler(stateUpdater: stateUpdater): diceRollHandler {
  return (diceCount: number, diceSize: number, text?: string, limit?: number) => {
    const rollResults = diceFunc(diceCount, diceSize);
    const now = new Date();
    const logObject = new diceLogDB(now.getTime(), diceCount, diceSize, rollResults, now);
    stateUpdater(rollResults, logObject, text, limit);
  };
}

export const DiceResultModal = (prop: diceResultProp) => {

  const diceNumbersResult = prop.diceState.diceResult.join(", ")
  const diceSumResult = prop.diceState.diceResult.reduce(function (accumulator, currentValue) {return accumulator + currentValue}, 0)
  const diceResultStyle1 = `${diceNumbersResult} => ${diceSumResult}`
  const diceResultStyle2 = prop.diceState.diceLog != undefined  ? `${prop.diceState.diceLog.count}D${prop.diceState.diceLog.dicesize} => ${diceSumResult}(${diceNumbersResult})` : ""
  let diceResultStyle3: string = "";
  if (prop.diceState.limit != undefined) {
    const failOrSuccess = diceSumResult <= prop.diceState.limit ? "成功" : "失敗";
    diceResultStyle3 = `${diceResultStyle2}<=${prop.diceState.limit}(${failOrSuccess})`
  }

  return (
    <Modal size={prop.size} show={prop.diceState.show} onHide={prop.onHide}>
      <Modal.Header>
        <Modal.Title>{prop.diceState.text == undefined ? "ダイスロール" : prop.diceState.text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {prop.resultStyle == "(numbers)=>sum" ?      diceResultStyle1 : 
         prop.resultStyle == "(xDx)=>numbers(sum)" ? diceResultStyle2 :
                                                     diceResultStyle3}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={prop.onHide} appearance="primary">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
  
export default DiceRoll