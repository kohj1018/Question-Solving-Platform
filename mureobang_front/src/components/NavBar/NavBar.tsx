import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './navBarStyles';

const NavBar = () => {


  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require('../../assets/images/logo.png')} alt="logo"/>
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to="/questions" style={{marginLeft: '5vw'}}>
            학과질문
          </NavLink>
          <NavLink to="/study-group">
            스터디
          </NavLink>
          <NavLink to="/project-team">
            프로젝트
          </NavLink>
          <NavLink to="/survey">
            설문
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">로그인</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;