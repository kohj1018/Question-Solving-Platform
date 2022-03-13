import  React from 'react';
import {PageContainer} from "@styles/frequentStyles";
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
import SearchBar from "@components/SearchBar/SearchBar";
import {fontLineHeight, fontSize, fontWeight} from "@styles/fontStyles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import main from '@img/main.png';
import major from "@img/major.png";
import minor from "@img/minor.png";
import geclass from "@img/geclass.png";


const HomePage = () => {
  return (
    <PageContainer>
      <MainFlex>

        <LeftAreaFlex>
          <MainTextArea>
            <Typography fontSize={fontSize.H1} lineHeight={fontLineHeight.H1} fontWeight={fontWeight.H1}>혼자하기 어려웠던<br/>전공 공부,</Typography>
            <Typography fontSize={fontSize.H2} lineHeight={fontLineHeight.H2} fontWeight={fontWeight.H2}>이제 물어방과 함께하세요.</Typography>
          </MainTextArea>
          <MainImgArea>
            <img src={main} alt="메인이미지"/>
          </MainImgArea>
        </LeftAreaFlex>

        <RightSideFlex>
          <SearchBar/>
          <AskQuestionBtn to="">
            <Typography fontSize={fontSize.H4} lineHeight={fontLineHeight.H4} fontWeight={fontWeight.H4}>질문하기</Typography>
            <ArrowForwardIcon fontSize="large"/>
          </AskQuestionBtn>
          <QuestionsPageBtnContainer>
            <Typography className="questionsCon" fontSize={fontSize.H4} lineHeight={fontLineHeight.H4} fontWeight={fontWeight.H4}>나에게도 유용한 질문 보러가기</Typography>

            <QuestionsPageLink className="questionsCon" to="">
              <Typography fontSize={fontSize.HT} lineHeight={fontLineHeight.HT} fontWeight={fontWeight.HT}>전공</Typography>
              <img src={major} alt="전공"/>
              <ArrowForwardIcon className="icon" fontSize="large"/>
            </QuestionsPageLink>

            <QuestionsPageLink className="questionsCon" to="">
              <Typography fontSize={fontSize.HT} lineHeight={fontLineHeight.HT} fontWeight={fontWeight.HT}>관심전공</Typography>
              <img src={minor} alt="관심전공"/>
              <ArrowForwardIcon className="icon" fontSize="large"/>
            </QuestionsPageLink>

            <QuestionsPageLink className="questionsCon" to="">
              <Typography fontSize={fontSize.HT} lineHeight={fontLineHeight.HT} fontWeight={fontWeight.HT}>교양과목</Typography>
              <img src={geclass} alt="교양과목"/>
              <ArrowForwardIcon className="icon" fontSize="large"/>
            </QuestionsPageLink>

          </QuestionsPageBtnContainer>
        </RightSideFlex>

      </MainFlex>
    </PageContainer>
  );
};

export default HomePage;