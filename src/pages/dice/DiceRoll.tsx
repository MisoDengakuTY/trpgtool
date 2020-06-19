import React, { useState } from 'react';
import {Button,ButtonToolbar,Modal} from 'rsuite';
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
  
  const [state, setState] = useState<stateType>({size:undefined,show:false});
  const [dice, setDice] = useState<number[]>(Array(0));

  // ダイスロール方式を受け取ってその方式に対応したアクション(() => void)を返す関数
  const rollHandlerGenerator: ((diceCount: number, diceSize: number) => (() => void)) = 
    (diceCount: number, diceSize: number) => 
      () => {
        setState({size:'xs',show:true});
        const rollResults = diceFunc(diceCount, diceSize);
        const now = new Date();

        console.log(rollResults);

        const logObject = new diceLogDB(now.getTime(), diceCount, diceSize, rollResults, now);
        prop.onRoll(logObject);
        setDice(rollResults);
      };
  
  return (
    <div className="modal-container">
      <ButtonToolbar>
        <Button size="lg" onClick={rollHandlerGenerator(1, 2)}>
          1d2
        </Button>
        <Button size="lg" onClick={rollHandlerGenerator(1, 3)}>
          1d3
        </Button>
        <Button size="lg" onClick={rollHandlerGenerator(2, 3)}>
          2d3
        </Button>
      </ButtonToolbar>

      <Modal size={state.size} show={state.show} onHide={() => setState({size:undefined,show:false})}>
        <Modal.Header>
          <Modal.Title>Dice Roll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dice.join(", ")} {"=>"} {dice.reduce(function (accumulator, currentValue) {return accumulator + currentValue}, 0)}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setState({size:undefined,show:false})} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
  
export default DiceRoll