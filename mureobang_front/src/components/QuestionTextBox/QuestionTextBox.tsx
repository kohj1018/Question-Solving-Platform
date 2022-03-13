import React from 'react';
import {QuestionTextBoxLink} from "./questionTextBoxStyles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Typography} from "@mui/material";
import {fontLineHeight, fontSize, fontWeight} from "@styles/fontStyles";

const QuestionTextBox = () => {
  return (
    <QuestionTextBoxLink to="/">
      <Typography fontSize={fontSize.HT} lineHeight={fontLineHeight.HT} fontWeight={fontWeight.HT} style={{height: '48px', overflow: 'hidden'}}>우리는, 지금, 서지윤강점기에 살고 있다...</Typography>
      <Typography fontSize={fontSize.Text2} lineHeight={fontLineHeight.Text2} fontWeight={fontWeight.Text2} style={{marginTop: '12px', color: '#939393', height: '76px', overflow: 'hidden'}}>묻고 싶은 질문을 검색해 보세요. 묻고 싶은 질문을 검색해 보세요.</Typography>
      <ArrowForwardIcon className="icon" fontSize="large"/>
    </QuestionTextBoxLink>
  );
};

export default QuestionTextBox;