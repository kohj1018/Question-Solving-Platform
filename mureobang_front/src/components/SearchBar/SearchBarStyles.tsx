import styled from "styled-components";
import {IconButton, InputBase} from "@mui/material";

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  border-bottom: 2px solid black;
`

export const SearchBtn = styled(IconButton)`
  top: 5px;
  left: 3px;
  z-index: 3;
`

export const SearchTextField = styled(InputBase)`
  width: 100%;
  height: 50px;
  padding-left: 45px;
`