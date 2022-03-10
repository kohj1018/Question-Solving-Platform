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
  //grid-template-rows: repeat(3, 347px);
  gap: 24px;
  margin-bottom: 48px;
`

export const QuestionCheckHeadFlex = styled.div`
  margin: 48px 0 40px;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  position: relative;
`

export const QuestionCheckBtnFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  position: absolute;
  top: 0;
  right: 0;
`

export const FilterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.07);
  border-radius: 100px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  color: #000;
  
  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
`

export const QuestionBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #202128;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.07);
  border-radius: 100px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  color: #fff;
`