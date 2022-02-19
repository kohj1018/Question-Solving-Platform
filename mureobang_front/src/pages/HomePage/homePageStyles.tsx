import styled from "styled-components";
import {sizeManager} from "../../styles/mediaQueryStyles";
import {Link} from "react-router-dom";
import {fontSize} from "../../styles/fontStyles";

// 데스크탑 PC 비율
// 7:5 비율
// 1280px
// 755px (734.93 + 20.11)     ->  761px
// 525px (524.95)             ->  519px

export const MainFlex = styled.div`
  display: flex;
  width: ${sizeManager.pcGlobalWidth};
  // height를 85vh로 잡고 flex의 align-items를 center로 하여 세로 크기가 큰 모니터의 경우에도 가운데에 올 수 있게함.
  height: 87vh;
  justify-content: space-between;
  align-items: center;
`

export const LeftAreaFlex = styled.div`
  width: 761px;
  height: ${sizeManager.mainPageHeight};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainTextArea = styled.div`
  padding-top: 80px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 304px;
`

export const MainImgArea = styled.div`
  padding-left: 10px;
  
  img {
    width: 603.6px;
    height: 330px;
  }
`

export const RightSideFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 519px;
  height: ${sizeManager.mainPageHeight};  
`

export const AskQuestionBtn = styled(Link)`
  width: 100%;
  height: 85px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  color: black;
`

export const QuestionsPageBtnContainer = styled.div`
  width: 100%;
  height: 425px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  
  display: grid;
  grid-template-columns: 207px 207px;
  grid-template-rows: 20px 177px 123px;
  gap: 24px;
  align-content: center;
  justify-content: center;

  .questionsCon {
    position: relative;
  }
  
  .questionsCon:nth-of-type(1) {
    grid-column: 1 / 3;
  }
  
  .questionsCon:nth-child(2) img {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 10%;
    left: 30%;
  }
  .questionsCon:nth-child(3) img {
    position: absolute;
    width: 105px;
    height: 110px;
    top: 0;
    left: 30%;
  }
  .questionsCon:nth-child(4) img {
    position: absolute;
    width: 180px;
    height: 67.5px;
    top: 45%;
    left: 5%;
  }
  
  
  .questionsCon .icon {
    position: absolute;
    right: 24px;
    bottom: 16px;
  }
`

export const QuestionsPageLink = styled(Link)`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #DEDEDE;
  color: black;
  font-size: ${fontSize.small};
  font-weight: bold;
  padding: 16px 24px;
`