import styled from "styled-components";

export const Nav = styled.nav`
  /* position: fixed;
  top: 0;
  height: 80px;
  display: flex;
  background: blue;
  justify-content: center;
  align-items: center; */
  margin: 0;
  top: 0;
  height: 80px;
  width: 99vw;
  display: flex;
  position: fixed;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    height: 6vh;
    font-size: 30px;
    align-items: flex-end;
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  /* position: absolute; */
  height: 80px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
`;

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 1280px) {
    /* 
     */
    display: grid;
    align-items: center;
    position: absolute;
    right: 30px;
    font-size: 60px;
    cursor: pointer;
    color: #000;
  }
`;

export const NavIcon = styled.a`
  margin-left: 40px;
  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }
`;
export const Img = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 1000px) {
    height: 80px;
    width: 80px;
  }
`;
export const NavList = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  color: #02162b;
  margin: 30px;
  @media screen and (max-width: 1250px) {
    margin: 15px;
    color: white;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin-right: 30px;
  border-radius: 50px;
  background: #00b4ab;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 1000px) {
    font-size: 32px;
  }
`;
