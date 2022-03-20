import React, {useContext} from 'react';
import {IconBtn, MainContainer, PageContainer, QuestionInfoFlex} from "@styles/frequentStyles";
import {SideBarContainer} from "@components/SideBar/sideBarStyles";
import SideBar from "@components/SideBar/SideBar";
import SearchBar from "@components/SearchBar/SearchBar";
import {useParams} from "react-router-dom";
import {AuthContext} from "@context/AuthContext";
import {CustomDepartmentTag, QuestionMainText, QuestionHeaderFlex, AnswerFlex} from "./questionDetailPageStyles";
import {Typography} from "@mui/material";
import {fontLineHeight, fontSize, fontWeight} from "@styles/fontStyles";
import AnswerBox from "@components/AnswerBox/AnswerBox";

const QuestionDetailPage = () => {
  const {id} = useParams<{ id: string }>();
  const user = useContext(AuthContext);

  return (
    <PageContainer>
      <SideBarContainer>
        <SideBar/>
      </SideBarContainer>

      <MainContainer>

        {/* 검색 바 */}
        <SearchBar/>

        {/* 질문 영역 */}
        <CustomDepartmentTag bgColor="#CA5AFF" color="#fff">수업종류</CustomDepartmentTag>
        <QuestionHeaderFlex>
          <IconBtn width="23px" height="23px">
            <img src={require("@img/icon_bookmark.svg").default} alt="나도 궁금해요"/>
          </IconBtn>
          <Typography fontSize={`${fontSize.big}`} fontWeight="bold">디미디는 취업 어디로 하나요?</Typography>
        </QuestionHeaderFlex>
        <QuestionMainText>
          비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.<br/>
          비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.
        </QuestionMainText>
        <QuestionInfoFlex textAlign="right">
          <p>2021.01.23</p>
          <p>답변수 13</p>
        </QuestionInfoFlex>

        {/* 답변 영역 */}
        <Typography fontSize={fontSize.H4} lineHeight={fontLineHeight.H4} fontWeight={fontWeight.H4} style={{margin: '24px 0 32px'}}>올라온 답변 💬</Typography>
        <AnswerFlex>
          <AnswerBox answerID="1"/>
          <AnswerBox answerID="2"/>
          <AnswerBox answerID="3"/>
        </AnswerFlex>
      </MainContainer>
    </PageContainer>
  );
};

export default QuestionDetailPage;