import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {device, sizeManager} from "../../styles/mediaQueryStyles";
import {fontSize} from "../../styles/fontStyles";

export const Nav = styled.nav`
  background: #fff;
  height: 13vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 calc((100vw - ${sizeManager.pcGlobalWidth}) / 2);
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
  font-size: ${fontSize.normal};
  
  :first-child {
    padding: 0;
  }
  img {
    width: 104px;
    height: 45px;
  }
  
  &.active {
    color: #15cdfc;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  
  @media screen and ${device.tablet} {
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
  
  @media screen and ${device.tablet} {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  
  @media screen and ${device.tablet} {
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
  font-size: ${fontSize.normal};
  
  :last-child {
    margin-right: 0;
  }
`