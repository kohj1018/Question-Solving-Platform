import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {fontSize} from "../../styles/fontStyles";

export const SideBarContainer = styled.nav`
  width: 193px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid black;
`

export const NavSLink = styled(NavLink)`
  color: #000;
  cursor: pointer;
  font-size: ${fontSize.normal};
  line-height: 24px;

  &.active {
    font-weight: bold;
  }
`