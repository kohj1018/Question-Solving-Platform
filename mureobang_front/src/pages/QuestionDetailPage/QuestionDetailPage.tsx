import React, {useContext} from 'react';
import {BookmarkBtn, MainContainer, PageContainer} from "@styles/frequentStyles";
import {SideBarContainer} from "@components/SideBar/sideBarStyles";
import SideBar from "../../components/SideBar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useParams} from "react-router-dom";
import {AuthContext} from "@context/AuthContext";
import {CustomDepartmentTag, TextHeaderFlex} from "./questionDetailPageStyles";

const QuestionDetailPage = () => {
  const {id} = useParams<{ id: string }>();
  const user = useContext(AuthContext);

  return (
    <PageContainer>
      <SideBarContainer>
        <SideBar/>
      </SideBarContainer>

      <MainContainer>
        <SearchBar/>
        <CustomDepartmentTag bgColor="#CA5AFF" color="#fff">수업종류</CustomDepartmentTag>
        <TextHeaderFlex>
          <BookmarkBtn width="18px" height="23px">
            <img src={require("@img/icon_bookmark.svg").default} alt="나도 궁금해요"/>
          </BookmarkBtn>
        </TextHeaderFlex>
      </MainContainer>
    </PageContainer>
  );
};

export default QuestionDetailPage;