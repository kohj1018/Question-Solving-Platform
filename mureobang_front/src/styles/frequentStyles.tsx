import styled from "styled-components";
import {sizeManager} from "./mediaQueryStyles";
import {Pagination} from "@mui/material";

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
  font-size: 12px;
  line-height: 24px;
  text-align: center;
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
export const BookmarkBtn = styled.div<bookmarkBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 5;
  img {
    width: ${props => props.width};
    height: ${props => props.height};
    text-align: center;
  }
`