import React, { useState } from 'react';
import {Button,ButtonToolbar,Modal} from 'rsuite';
import diceFunc from './diceFunc'

interface stateType{
  size : undefined|'xs'
  show : boolean
}


const DiceRoll = () =>{
  
  const [state, setState] = useState<stateType>({size:undefined,show:false});
  const [dice, setDice] = useState<number[]>(Array(0));
  
  return (
        <div className="modal-container">
          <ButtonToolbar>
            <Button size="lg" onClick={() => {
            setState({size:'xs',show:true})
            setDice(diceFunc(1,2))}
            }>
              1d2
          </Button>
          <Button size="lg" onClick={() => {
            setState({size:'xs',show:true})
            setDice(diceFunc(1,3))}
            }>
              1d3
          </Button>
          
          <Button size="lg" onClick={() => {
            setState({size:'xs',show:true})
            setDice(diceFunc(2,3))}
            }>
              2d3
          </Button>

          </ButtonToolbar>
          <Modal size={state.size} show={state.show} onHide={() => setState({size:undefined,show:false})}>
            <Modal.Header>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {dice}
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