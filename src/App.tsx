import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';

import SideBar from './otherComponent/SideBar';

import Home from './pages/home/Home';
import CoC from './pages/coc/CoC';
import Shinobigami from './pages/shinobigami/Shinobigami';
import Insane from './pages/insane/Insane';
import Dice from './pages/dice/Dice';
import Load from './pages/load/Load';



const App : React.FC = () => {
  return (
    <div className="App">
      <SideBar />

      <Router>
        <Switch>
          <Route path="/" exact children={<Home />} />
          <Route path="/coc" children={<CoC />} />
          <Route path="/shinobigami" exact children={<Shinobigami />} />
          <Route path="/insane" children={<Insane />} />
          <Route path="/dice" children={<Dice />} />
          <Route path="/load" children={<Load />} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
