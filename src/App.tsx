import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';

import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Content, Sidebar } from 'rsuite';

import NavBar from './otherComponent/NavBar';
import SideBar from './otherComponent/SideBar';

import Home from './pages/home/Home';
import CoC from './pages/coc/CoC';
import Shinobigami from './pages/shinobigami/Shinobigami';
import Insane from './pages/insane/Insane';
import Dice from './pages/dice/Dice';
import Load from './pages/load/Load';
import { Component } from "react";

fetch('/users')
  .then(response => response.text())
  .then(data => console.log({data}));

const Routing = () =>{
  return (
    <Router>
    <Switch>
      <Route path="/" exact children={<Home />} />
      <Route path="/coc" children={<CoC />} />
      <Route path="/shinobigami" children={<Shinobigami />} />
      <Route path="/insane" children={<Insane />} />
      <Route path="/dice" children={<Dice />} />
      <Route path="/load" children={<Load />} />
    </Switch>
  </Router>
  )
}


const App : React.FC = () => {

  return (
    <div className="App">
      <Container>
      <Header><NavBar/></Header>
      <Container>
      <Sidebar><SideBar /></Sidebar>
      <Content><Routing /></Content>
      </Container>
      </Container>
    </div>
    
  );
}

export default App;
