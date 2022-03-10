import React from 'react';
import {
  BookmarkFlex,
  CustomDepartmentTag,
  QuestionMainBoxLink,
  BookmarkBtn,
  TextFlex,
  QuestionInfoTextFlex
} from "./questionMainBoxStyles";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {tagColor1} from "../../styles/color/tagColor";
import {Typography} from "@mui/material";

interface QuestionMainBoxProps {
  id: string;
}

const QuestionMainBox = ({ id }: QuestionMainBoxProps) => {

  const bookmarkHandler = (e: any) => {
    e.preventDefault(); // 이벤트 버블링을 막음 (위의 Link가 실행되는 것을 막음)
    console.log("북마크눌림");
  }

  return (
    <QuestionMainBoxLink to={`/questions/${id}`}>

      <TextFlex>
        <QuestionInfoTextFlex>
          <p>2021.01.23</p>
          <p>답변수 13</p>
        </QuestionInfoTextFlex>

        <Typography fontSize="20px" lineHeight="24px" fontWeight="bold" style={{margin: '8px 0 12px', height: '48px', overflow: 'hidden'}}>경영정보시스템 305페이지 답이 뭔가요?</Typography>
        {/*<MainText fontSize="16px" lineHeight="24px">답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어</MainText>*/}
        <Typography fontSize="16px" lineHeight="24px" style={{color: '#939393', height: '140px', overflow: 'hidden'}}>답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어답좀여 급해여 내공 500걸음 아니이제가어더저구 저저구 어러어</Typography>
      </TextFlex>

      <CustomDepartmentTag bgColor={tagColor1} color="#fff">수업종류서지윤바보서지윤바보ㅇㅁㄴㄹㅇ넘리ㅏㅇ너ㅏㅣ러아ㅣㅁ너ㅏㄹㅇ너ㅣ</CustomDepartmentTag>
      <BookmarkFlex>
        <p>12</p>
        <BookmarkBtn onClick={(e) => bookmarkHandler(e)}>
          <BookmarkBorderIcon fontSize="large"/>
        </BookmarkBtn>
      </BookmarkFlex>
    </QuestionMainBoxLink>
  );
};

export default QuestionMainBox;