import React from 'react';
import {LeftSideContainer, MainContainer, PageContainer} from "../../styles/frequentStyles";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import {Typography} from "@mui/material";
import {QuestionMainBoxContainer, QuestionTextBoxContainer} from "./questionsPageStyles";
import QuestionTextBox from "../../components/QuestionTextBox/QuestionTextBox";
import QuestionMainBox from "../../components/QuestionMainBox/QuestionMainBox";

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
        <Typography fontSize="20px" fontWeight="bold" lineHeight="24px" style={{margin: '40px 0'}}>지금 가장 활발한 글 ✍</Typography>
        <QuestionTextBoxContainer>
          <QuestionTextBox/>
          <QuestionTextBox/>
          <QuestionTextBox/>
        </QuestionTextBoxContainer>

        {/* 모든 질문 확인하기 */}
        <Typography fontSize="20px" fontWeight="bold" lineHeight="24px" style={{margin: '48px 0 40px'}}>모든 질문 확인하기 ✅</Typography>
        <QuestionMainBoxContainer>
          <QuestionMainBox/>
          <QuestionMainBox/>
          <QuestionMainBox/>
          <QuestionMainBox/>
          <QuestionMainBox/>
          <QuestionMainBox/>
          <QuestionMainBox/>
        </QuestionMainBoxContainer>

      </MainContainer>
    </PageContainer>
  );
};

export default QuestionsPage;