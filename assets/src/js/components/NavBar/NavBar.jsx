import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavList,
  NavButton,
  NavIcon,
  NavItem,
  Button,
  Img,
  MobileMenu,
} from "./NavBarElements.jsx";

const NavBar = ({ handleClick }) => {
  return (
    <Nav>
      <NavContainer>
        <NavIcon href="/">
          <Img src={"/assets/src/images/favicon.svg"}></Img>
        </NavIcon>
        <MobileMenu onClick={handleClick}>
          <FaBars />
        </MobileMenu>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>About</NavItem>
        </NavList>
        <NavButton>
          <Button> Sign up</Button>
        </NavButton>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
