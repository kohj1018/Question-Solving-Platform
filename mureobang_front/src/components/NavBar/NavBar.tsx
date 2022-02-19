import React from 'react';
import { Nav, NavSLink, Bars, NavMenu, NavBtn, NavBtnLink } from './navBarStyles';

const NavBar = () => {


  return (
    <Nav>
      <NavSLink to="/" style={{borderBottom: 'none', padding: '0'}}>
        <img src="assets/img/logo.png" alt="logo"/>
      </NavSLink>
      <Bars/>
      <NavMenu>
        <NavSLink to="/questions" style={{marginLeft: '5vw'}}>
          학과질문
        </NavSLink>
        <NavSLink to="/study-group">
          스터디
        </NavSLink>
        <NavSLink to="/project-team">
          프로젝트
        </NavSLink>
        <NavSLink to="/survey">
          설문
        </NavSLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/sign-in" backgroundcolor="#fff" fontcolor="#000">로그인</NavBtnLink>
        <NavBtnLink to="/sign-up" backgroundcolor="#000" fontcolor="#fff">회원가입</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;