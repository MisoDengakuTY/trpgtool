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

import Home from './pages/Home';
import CoC from './pages/CoC';
import Shinobigami from './pages/Shinobigami';
import Insane from './pages/Insane';
import Dice from './pages/Dice';
import Load from './pages/Load';



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
        </Switch>
      </Router>
{/*       <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>

          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
 */}

    </div>
  );
}

export default App;
