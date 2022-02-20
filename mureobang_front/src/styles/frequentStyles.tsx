import styled from "styled-components";
import {sizeManager} from "./mediaQueryStyles";

//margin: 2vh calc((100vw - (${sizeManager.pcGlobalWidth} + 20px)) / 2);
export const PageContainer = styled.div`
  position: relative;
  max-width: ${sizeManager.pcGlobalWidth};
  width: 100%;
  margin: 0 auto;
`

export const LeftSideContainer = styled.div`
  width: 193px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0;
`

export const MainContainer = styled.div`
  width: 954px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0;
`