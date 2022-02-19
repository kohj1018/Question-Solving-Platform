import React from 'react';
import {MenuList, NavSLink, SideBarContainer} from "./sideBarStyles";
import {Typography} from "@mui/material";

const 임시메뉴 = {
  전공: [{
    전공이름: "디지털미디어디자인학과",
    path: "/survey"
  }],

  관심전공: [{
    전공이름: "소프트웨어학과",
    path: "/survey"
  }, {
    전공이름: "경영학과",
    path: "/survey"
  }]
}

const SideBar = () => {
  return (
    <SideBarContainer>
      <Typography fontSize="24px" fontWeight="bold" lineHeight="40px">전공</Typography>
      <MenuList>
        {임시메뉴.전공.map(menu => {
          return (
            <Typography fontSize="16px" lineHeight="24px">• <NavSLink to={menu.path}>{menu.전공이름}</NavSLink></Typography>
          )
        })}
      </MenuList>

      <Typography fontSize="24px" fontWeight="bold" lineHeight="40px">관심전공</Typography>
      <MenuList>
        {임시메뉴.관심전공.map(menu => {
          return (
            <Typography fontSize="16px" lineHeight="24px">• <NavSLink to={menu.path}>{menu.전공이름}</NavSLink></Typography>
          )
        })}
      </MenuList>

      <Typography fontSize="16px" lineHeight="24px">• <NavSLink to="/">교양과목</NavSLink></Typography>

    </SideBarContainer>
  );
};

export default SideBar;