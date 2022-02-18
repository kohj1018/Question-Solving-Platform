import React from 'react';
import {PageContainer} from "../../styles/frequentStyles";
import {
  LeftAreaFlex,
  MainTextArea,
  MainFlex,
  AskQuestionBtn,
  QuestionsPageBtnContainer,
  RightSideFlex,
  QuestionsPageLink, MainImgArea
} from "./homePageStyles";
import {Typography} from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";
import {fontSize} from "../../styles/fontStyles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const HomePage = () => {
  return (
    <PageContainer>
      <MainFlex>
        <LeftAreaFlex>
          <MainTextArea>
            <Typography fontSize="56px" fontWeight="bold" lineHeight="80px">혼자하기 어려웠던<br/>전공 공부,</Typography>
            <Typography fontSize="32px" lineHeight="48px">이제 물어방과 함께하세요.</Typography>
          </MainTextArea>
          <MainImgArea>
            <img src="assets/img/main.png" alt="메인이미지"/>
          </MainImgArea>
        </LeftAreaFlex>
        <RightSideFlex>
          <SearchBar/>
          <AskQuestionBtn to="">
            <Typography fontSize={`${fontSize.normal}`} fontWeight="bold">질문하기</Typography>
            <ArrowForwardIcon fontSize="large"/>
          </AskQuestionBtn>
          <QuestionsPageBtnContainer>
            <Typography className="questionsCon" fontSize={`${fontSize.normal}`} fontWeight="bold">나에게도 유용한 질문 보러가기</Typography>

            <QuestionsPageLink className="questionsCon" to="">
              <Typography fontSize={`${fontSize.small}`} fontWeight="bold">전공</Typography>
              <img src="assets/img/major.png" alt="전공"/>
              <ArrowForwardIcon className="icon" fontSize="large"/>
            </QuestionsPageLink>

            <QuestionsPageLink className="questionsCon" to="">
              <Typography fontSize={`${fontSize.small}`} fontWeight="bold">관심전공</Typography>
              <img src="assets/img/minor.png" alt="관심전공"/>
              <ArrowForwardIcon className="icon" fontSize="large"/>
            </QuestionsPageLink>

            <QuestionsPageLink className="questionsCon" to="">
              <Typography fontSize={`${fontSize.small}`} fontWeight="bold">교양과목</Typography>
              <img src="assets/img/geclass.png" alt="교양과목"/>
              <ArrowForwardIcon className="icon" fontSize="large"/>
            </QuestionsPageLink>

          </QuestionsPageBtnContainer>
        </RightSideFlex>
      </MainFlex>
    </PageContainer>
  );
};

export default HomePage;