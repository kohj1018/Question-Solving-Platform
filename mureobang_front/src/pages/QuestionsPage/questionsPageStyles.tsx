import styled from "styled-components";

export const QuestionTextBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`

export const QuestionMainBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 302px);
  grid-template-rows: repeat(3, 347px);
  gap: 24px;
`