import styled from "styled-components";
import {DepartmentTag} from "@styles/frequentStyles";
import {fontSize} from "@styles/fontStyles";

export const CustomDepartmentTag = styled(DepartmentTag)`
  margin-top: 39px;
  margin-bottom: 24px;
`

export const QuestionHeaderFlex = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`

export const QuestionMainText = styled.p`
  font-size: ${fontSize.normal};
  line-height: 24px;
  margin-bottom: 16px;
`

export const AnswerFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 100px;
`