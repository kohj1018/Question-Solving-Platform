import styled from "styled-components";
import {sizeManager} from "./mediaQueryStyles";
import {IconButton, Pagination} from "@mui/material";
import {fontLineHeight, fontSize, fontWeight} from "@styles/fontStyles";

//margin: 2vh calc((100vw - (${sizeManager.pcGlobalWidth} + 20px)) / 2);
// 페이지 컨테이너
export const PageContainer = styled.div`
  position: relative;
  max-width: ${sizeManager.pcGlobalWidth};
  width: 100%;
  margin: 0 auto;
`

// 왼쪽 사이드바 배치하는 컨테이너
export const LeftSideContainer = styled.div`
  width: 193px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0;
`

// 사이드바 공간을 제외한 중앙의 메인 컨테이너
export const MainContainer = styled.div`
  width: 954px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
`

interface departmentTagProps {
  color: string;
  bgColor: string;
}
// 학과 태그
export const DepartmentTag = styled.div<departmentTagProps>`
  width: 110px;
  height: 32px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  padding: 4px 16px;
  border-radius: 30px;
  font-size: ${fontSize.BT};
  line-height: ${fontLineHeight.BT};
  font-weight: ${fontWeight.BT};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
`

// 페이지네이션 커스텀
export const CustomPagination = styled(Pagination)`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ul {
    width: 549px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

interface bookmarkBtnProps {
  width: string;
  height: string;
}
// bookmark Icon Btn
export const BookmarkBtn = styled(IconButton)<bookmarkBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  z-index: 5;
  
  img {
    width: ${props => props.width};
    height: ${props => props.height};
  }
`

interface questionInfoFlexProps {
  textAlign: string;
}
// 질문글 정보 컨테이너
export const QuestionInfoFlex = styled.div<questionInfoFlexProps>`
  width: 100%;
  height: 24px;
  text-align: ${props => props.textAlign};
  
  p {
    display: inline;
    font-size: ${fontSize.Text3};
    line-height: ${fontLineHeight.Text3};
    font-weight: ${fontWeight.Text3};
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