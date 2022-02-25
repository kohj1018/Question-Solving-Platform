import styled from "styled-components";
import {Link} from "react-router-dom";

export const QuestionTextBoxLink = styled(Link)`
  width: 302px;
  height: 232px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 32px 30px;
  color: black;
  position: relative;
  
  .icon {
    position: absolute;
    right: 30px;
    bottom: 32px;
  }
`

export const TextFlex = styled.div`
  width: 100%;
  height: 136px;
  flex-direction: column;
  justify-content: space-between;
`