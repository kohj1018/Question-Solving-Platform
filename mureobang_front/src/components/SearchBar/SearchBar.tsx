import React, {useState} from 'react';
import {SearchBarContainer, SearchBtn, SearchTextField} from "./searchBarStyles";
import SearchIcon from '@mui/icons-material/Search';
import {fontSize} from "@styles/fontStyles";

const SearchBar = () => {
  const [text, setText] = useState<string>('');
  // 하단 input 박스에서 값 변경 시 이벤트 객체가 파라미터(e)에 담겨서 온다.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target에는 이벤트가 발생한 input DOM에 대한 정보를 가지고 있다.
    console.log(e.target);
    // 이벤트가 발생한 DOM의 값 가져오기
    console.log(e.target.value);
    setText(e.target.value);
  }


  return (
    <SearchBarContainer>
      <SearchBtn
        style={{position: 'absolute'}}
      >
        <SearchIcon fontSize="large"/>
      </SearchBtn>
      <SearchTextField
        placeholder="묻고 싶은 질문을 검색해 보세요."
        style={{fontSize: `${fontSize.normal}`}}
        onChange={onChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;