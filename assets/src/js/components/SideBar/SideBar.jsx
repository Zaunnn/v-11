import React from "react";
import { Button } from "../Button.jsx";
import {
  SideBarContainer,
  SideBarMenu,
  SideBarItem,
  CloseIcon,
  ButtonWrapper,
  CloseIconWrapepr,
} from "./SideBarElements.jsx";

const SideBar = ({ isOpen, handleClick }) => {
  return (
    <>
      <SideBarContainer onClick={handleClick} isOpen={isOpen}>
        <CloseIconWrapepr>
          <CloseIcon />
        </CloseIconWrapepr>
        <SideBarMenu>
          <SideBarItem onClick={handleClick}>Home</SideBarItem>
          <SideBarItem onClick={handleClick}>Services</SideBarItem>
          <SideBarItem onClick={handleClick}>About</SideBarItem>
        </SideBarMenu>
        <ButtonWrapper>
          <Button onClick={handleClick}>Sign up</Button>
        </ButtonWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
