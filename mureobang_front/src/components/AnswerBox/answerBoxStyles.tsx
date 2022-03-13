import styled from 'styled-components';
import {Button} from "@mui/material";
import {fontLineHeight, fontSize, fontWeight} from "@styles/fontStyles";
import {IconBtn} from "@styles/frequentStyles";

export const AnswerBoxContainer = styled.div`
  width: 100%;
  min-width: 954px;
  height: 453px;
  background: #fff;
  border: 1px solid #DBDDE1;
  border-radius: 30px;
  padding: 33px 40px 33px 233px;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const LeftFlex = styled.div`
  width: 193px;
  height: 100%;
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #DBDDE1;
  box-sizing: border-box;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
  position: absolute;
  left: 0;
  top: 0;
`

export const ProfileFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

interface applyBtnProps {
  bgColor: string;
  fontColor: string;
}
export const ApplyBtn = styled(Button)<applyBtnProps>`
  font-size: ${fontSize.BT} !important;
  line-height: ${fontLineHeight.BT} !important;
  font-weight: ${fontWeight.BT} !important;
  width: 100%;
  height: 42px;
  background-color: ${props => props.bgColor} !important;
  color: ${props => props.fontColor} !important;
  border: 1px solid #F5F5F5 !important;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.07) !important;
  border-radius: 100px !important;
`

export const PostTagFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ThumbUpIconBtn = styled(IconBtn)`
  position: absolute !important;
  right: 40px;
  top: 33px;
`