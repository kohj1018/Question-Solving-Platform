import React from 'react';
import {QuestionLinkContainer} from "./questionTextBoxStyles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QuestionTextBox = () => {
  return (
    <QuestionLinkContainer to="/">
      <ArrowForwardIcon className="icon" fontSize="large"/>
    </QuestionLinkContainer>
  );
};

export default QuestionTextBox;