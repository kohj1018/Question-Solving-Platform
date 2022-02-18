import styled from "styled-components";
import {sizeManager} from "./mediaQueryStyles";

//margin: 2vh calc((100vw - (${sizeManager.pcGlobalWidth} + 20px)) / 2);
export const PageContainer = styled.div`
  max-width: ${sizeManager.pcGlobalWidth};
  width: 100%;
  margin: 0 auto;
`