import React from 'react';
import {
  AnswerBoxContainer,
  ApplyBtn,
  BtnFlex,
  LeftFlex,
  ProfileFlex,
  PostTagFlex,
  ThumbUpIconBtn
} from "./answerBoxStyles";
import {Avatar} from "@mui/material";
import {H4, HT, Text1, Text3, Text4} from "@styles/fontStyles";
import {PostTag} from "@styles/frequentStyles";

const 임시 = ["학점 4.42점", "지금까지 15번의 채택", "'물어방' 프로젝트 진행중"]

const AnswerBox = () => {
  return (
    <AnswerBoxContainer>
      {/* 왼쪽 프로필 영역 */}
      <LeftFlex>
        <ProfileFlex>
          <Avatar sx={{width: 64, height: 64}} src={require("@img/icon_user.svg").default} alt="프로필 이미지" style={{border: '1px solid black'}}/>
          <HT>고병욱</HT>
          <Text3 style={{textAlign: 'center', marginBottom: '8px'}}>소프트웨어학과<br/>20학번</Text3>
          <div>
            {임시.map(텍스트 => {
              return (
                <Text4>✔ {텍스트}</Text4>
              )
            })}
          </div>
        </ProfileFlex>
        <BtnFlex>
          <ApplyBtn bgColor="#fff" fontColor="#000">1:1대화 신청하기</ApplyBtn>
          <ApplyBtn bgColor="#000" fontColor="#fff">프로젝트 제안하기</ApplyBtn>
        </BtnFlex>
      </LeftFlex>

      {/* 오른쪽 메인 질문 영역 */}
      <PostTagFlex>
        <PostTag fontColor="#DC3838" bgColor="#fff">BEST</PostTag>
        <PostTag fontColor="#64C926" bgColor="#fff">채택</PostTag>
      </PostTagFlex>
      <ThumbUpIconBtn height="20px" width="20px">
        <img src={require("@img/icon_thumbs-up.svg").default} alt="최고에요!"/>
      </ThumbUpIconBtn>
      <H4 style={{margin: '16px 0 8px'}}>구글코리아에 입사하고 싶다면 저를 따르세요.</H4>
      <Text1>비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다. 지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 모든 국민은 인간다운 생활을 할 권리를 가진다. 대통령의 임기가 만료되는 때에는 임기만료 70일 내지 40일전에 후임자를 선거한다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.<br/></Text1>
    </AnswerBoxContainer>
  );
};

export default AnswerBox;