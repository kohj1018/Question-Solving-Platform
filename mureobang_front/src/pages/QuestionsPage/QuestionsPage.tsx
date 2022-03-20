import React from 'react';
import {CustomPagination, LeftSideContainer, MainContainer, PageContainer} from "@styles/frequentStyles";
import SideBar from "@components/SideBar/SideBar";
import SearchBar from "@components/SearchBar/SearchBar";
import {Typography} from "@mui/material";
import {
  FilterBtn, QuestionBtn,
  QuestionCheckBtnFlex,
  QuestionCheckHeadFlex,
  QuestionMainBoxContainer,
  QuestionTextBoxContainer
} from "./questionsPageStyles";
import QuestionTextBox from "@components/QuestionTextBox/QuestionTextBox";
import QuestionMainBox from "@components/QuestionMainBox/QuestionMainBox";
import {fontLineHeight, fontSize, fontWeight} from "@styles/fontStyles";

const QuestionsPage = () => {
  return (
    <PageContainer>
      <LeftSideContainer>
        <SideBar/>
      </LeftSideContainer>

      <MainContainer>

        {/* 검색창 */}
        <SearchBar/>

        {/* 지금 가장 활발한 글 */}
        <Typography fontSize={fontSize.H4} lineHeight={fontLineHeight.H4} fontWeight={fontWeight.H4} style={{margin: '40px 0'}}>지금 가장 활발한 글 ✍</Typography>
        <QuestionTextBoxContainer>
          <QuestionTextBox/>
          <QuestionTextBox/>
          <QuestionTextBox/>
        </QuestionTextBoxContainer>

        {/* 모든 질문 확인하기 */}
        <QuestionCheckHeadFlex>
          <Typography fontSize={fontSize.H4} lineHeight={fontLineHeight.H4} fontWeight={fontWeight.H4} style={{display: 'inline', top: '0', left: '0'}}>모든 질문 확인하기 ✅</Typography>
          <QuestionCheckBtnFlex>
            <FilterBtn>
              <img src={require("@img/icon_filter.svg").default} alt="필터"/>
              필터
            </FilterBtn>
            <QuestionBtn>
              🤔 나도 질문하기
            </QuestionBtn>
          </QuestionCheckBtnFlex>
        </QuestionCheckHeadFlex>
        <QuestionMainBoxContainer>
          <QuestionMainBox id="01"/>
          <QuestionMainBox id="02"/>
          <QuestionMainBox id="03"/>
        </QuestionMainBoxContainer>
        <CustomPagination
          count={10}
          size="large"
          showFirstButton showLastButton
          style={{marginBottom: '266px'}}
        />

      </MainContainer>
    </PageContainer>
  );
};

export default QuestionsPage;