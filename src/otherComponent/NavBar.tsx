import React from 'react'
import { Navbar,Nav,Icon,Dropdown } from 'rsuite';
import AuthComponent from './AuthComponent';

interface ItemsType {
  name: string,
  label: string
}

interface PropsType{
  Items : Array<ItemsType>
}

/* 
const getListItem = (item:ItemsType) =>{
  return(
    <ListItem button key = {item.name}>
      <ListItemText> {item.label} </ListItemText>
    </ListItem>
  )
}

 */
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