import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
  import logo from '../static/logo.svg'
  import { LinkContainer } from "react-router-bootstrap";
  import './NavBarVivalinda.css'

export default class NavBarVivalinda extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navme" fixed="top" dark expand="md">
          <NavbarBrand href="/">
          <img 
              alt="Vivalinda"
               src={logo}
               className="logo"
               width="150px"
               height="auto"
               />
          </NavbarBrand>
          <NavbarToggler id="button1" aria-label="Botão Menu" aria-pressed="false" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <LinkContainer  to="/">
                <NavItem>
                <NavLink  id="link1" role="link" aria-label="Home" aria-labelledby="link1" href="" >Home</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer  to="/parcerias">
                <NavItem>
                <NavLink  id="link2" role="link" aria-label="Parcerias" aria-labelledby="link2" href="" >Parcerias</NavLink>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

 /* <LinkContainer  to="/parcerias">
    <NavItem>
    <NavLink  id="link3" role="link" aria-label="Franquias" aria-labelledby="link3" href="">Franquias</NavLink>
    </NavItem>
  </LinkContainer> */