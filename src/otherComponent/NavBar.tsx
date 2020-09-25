import React,{useState,useEffect} from 'react'
import { Navbar,Nav,Icon,Dropdown } from 'rsuite';
import AuthComponent from './AuthComponent';

import axios from 'axios';

import { CoCCharacterType } from '../dbtype/cocCharacter';




const Item = () =>{
  const [show,setShow] = useState(<div></div>)
  useEffect(() => {
  axios.get(`http://localhost:3001/cocCharacter/`)
  .then(res => {
    const character : any = res.data;
    setShow(character.map((t : CoCCharacterType) => <Dropdown.Item > {t["name"]} </Dropdown.Item>));
  }
  )
  },[]);
  return (show);
}

const NavBar = () => {

  return (
    <Navbar>
    <Navbar.Body>
      <Nav>
        <Nav.Item icon={<Icon icon="home" />} href = '/'>Home</Nav.Item>
        <Dropdown title="New">
          <Dropdown.Item href = '/coc'>クトゥルフ神話TRPG</Dropdown.Item>
          <Dropdown.Item href = '/shinobigami'>シノビガミ</Dropdown.Item>
          <Dropdown.Item href = '/insane'>インセイン</Dropdown.Item>
        </Dropdown>
        <Nav.Item href = '/load'>Load</Nav.Item>
        <Nav.Item href = '/dice'>Dice</Nav.Item>

      </Nav>
      <Nav pullRight>
        <AuthComponent/>
        <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
      </Nav>
    </Navbar.Body>
  </Navbar>
  )
}
/* 
const SideBarMake : React.FC<PropsType> = (props) => {
  return(
    <div className="sidenav">
      <List disablePadding dense>
        
        {props.Items.map(item => getListItem(item))}

      </List>
    </div>
  )
} */

export default NavBar;