import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 5.5vw;
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  img {
    height: 70%;
    width: 104px;
  }
  
  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  
  @media screen and (max-width: 950px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;
  gap: 3vw;
  
  @media screen and (max-width: 950px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  
  @media screen and (max-width: 950px) {
    display: none;
  }
`

interface NavBtnColorProps {
  backgroundcolor: string;
  fontcolor: string;
}

export const NavBtnLink = styled(Link)<NavBtnColorProps>`
  border-radius: 4px;
  background: ${props => props.backgroundcolor};
  color: ${props => props.fontcolor};
  padding: 10px 22px;
  border: 1px solid black;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  margin-right: 16px;
`