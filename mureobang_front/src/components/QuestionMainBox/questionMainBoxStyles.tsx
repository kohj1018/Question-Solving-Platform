import styled from "styled-components";
import {Link} from "react-router-dom";
import {DepartmentTag} from "../../styles/frequentStyles";
import {IconButton, Typography} from "@mui/material";

export const QuestionMainBoxLink = styled(Link)`
  width: 302px;
  height: 347px;
  background-color: #fff;
  border: 1px solid #DEDEDE;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
  padding: 24px 30px;
  color: black;
  position: relative;
`

export const TextFlex = styled.div`
  width: 100%;
  height: 234px;
  flex-direction: column;
`

export const QuestionInfoTextFlex = styled.div`
  width: 100%;
  height: 24px;
  
  p {
    display: inline;
    font-size: 12px;
    line-height: 24px;
    padding-right: 10px;
    border-right: 2px solid #A5A6B0;
    color: #A5A6B0;
    text-align: center;

    :last-child {
      padding-left: 10px;
      padding-right: 0;
      border-right: none;
      color: #3E73FF;
    }
  }
`

// export const MainText = styled(Typography)`
//   font-size: 16px;
//   line-height: 24px;
//   color: #939393;
//   height: 140px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp : 6;
// `

export const BookmarkFlex = styled.div`
  position: absolute;
  right: 23px;
  bottom: 32px;
  width: 28px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 12px;
    line-height: 24px;
    text-align: center;
  }
`

export const BookmarkBtn = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 18px;
  z-index: 5;
`

export const CustomDepartmentTag = styled(DepartmentTag)`
  position: absolute;
  left: 30px;
  bottom: 25px;
`